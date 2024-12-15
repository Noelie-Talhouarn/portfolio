<script setup lang="ts">
import { ref, computed, onMounted, inject, type Ref } from 'vue';
import { pb } from '@/backend';
import type { CardsResponse, ProjetsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import Btn from '@/components/btn.vue';
import { useRouter, useRoute } from 'vue-router';

import { useHead } from '@unhead/vue'


useHead({
  title: ' Mes projets  | Portfolio de Noélie Talhouarn',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez mes projets web où créativité et technologies modernes se rencontrent.'
    }
  ]
})
const router = useRouter()
const route = useRoute()

// Charger la liste complète des cartes et des projets depuis PocketBase
const listCard = await pb.collection('cards').getFullList<CardsResponse>({ expand: 'projet' });
const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>();

// Associer chaque card au projet correspondant
const listCardWithProjet = listCard.map((card) => {
  const projet = listProjet.find((projet) => projet.id === card.projet); // Replace projet_id with the actual field linking card to project
  return { ...card, projet: projet ? projet : null, projetId: projet?.id, expand: { projet } };
});

// Définir le filtre actif
const filter = ref('Tous');
const categories = ['Tous', 'Dev', 'Design', 'Projet personnel'];

// Appliquer le filtre et retourner les cartes filtrées
const filteredProjects = computed(() => {
  return filter.value === 'Tous'
    ? listCardWithProjet
    : listCardWithProjet.filter((card) => card.categorie === filter.value);
});

// Fonction pour changer le filtre
const setFilter = (newFilter: string) => {
  filter.value = newFilter;
};

const fetchCards = async () => {
  try {
    const newCards = await pb.collection('cards').getFullList<CardsResponse>({ expand: 'projet' })
    const newProjets = await pb.collection('projets').getFullList<ProjetsResponse>()
    
    // Mise à jour de la liste
    listCardWithProjet.value = newCards.map((card) => {
      const projet = newProjets.find((p) => p.id === card.projet)
      return { ...card, projet: projet ? projet : null, projetId: projet?.id, expand: { projet } }
    })
  } catch (error) {
    console.error('Erreur lors du chargement:', error)
  }
}





</script>
<template>
    
  <section class="px-6">
    
    <section class="">
<div class="relative mx-auto pl-14">
    <!-- Grille principale -->
    <div class=""></div>
    <!-- Ligne avec des cases -->
    <div class=""></div>
    <!-- Texte superposé -->
    <h1 class="relative mb-12 text-center">Mes <span class="text-mauve">Projets</span> </h1>
    
  </div>
  
      <!-- Filtrage avec un menu déroulant sur mobile, et boutons sur écran plus large -->
      <section class="mb-6 py-2 lg:flex lg:justify-center lg:space-x-4">
        <select v-model="filter" @change="setFilter(($event.target as HTMLSelectElement).value || '')" class="block lg:hidden py-2 px-4 rounded text-sm bg-backgroundGris hover border border-mauve">
          <option v-for="category in categories" :key="category" :value="category" class="">
            {{ category }}
          </option>
        </select>

        <div class="hidden lg:flex gap-8">
          <button
            v-for="category in categories"
            :key="category"
            @click="setFilter(category)"
            :class="[ 
              'py-2 px-4 rounded-full text-sm ', 
              filter === category ? 'bg-mauve text-black' : 'bg-backgroundGris border border-mauve text-gray-800 hover:bg-mauve ' 
            ]"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <!-- Liste des projets filtrés -->
         <div class="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto px-4">
    <div
      v-for="card in filteredProjects"
      :key="card.id"
      class="bg-white rounded-3xl w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] transition-all duration-300"
    >

 
      <ImgPb 
        :record="card" 
        :filename="card.img" 
        class="w-full h-44 sm:h-48 md:h-52 object-cover rounded-t-3xl" 
        alt="Image du projet" 
      />
      
      <div class="p-4 sm:p-6">
        <!-- Tags des domaines -->
        <div class="flex justify-between items-center mb-2">
          <div class="flex justify-between items-center mb-2">
          <div class="flex flex-wrap gap-4">
              <span v-if="card.domaines1" class="border border-black px-4 py-2 text-black  rounded-full text-xs">{{ card.domaines1 }}</span>
              <span v-if="card.domaines2" class="border border-black px-4 py-2 text-black  rounded-full text-xs">{{ card.domaines2 }}</span>
              <span v-if="card.domaines3" class="border border-black px-4 py-2 text-black rounded-full text-xs">{{ card.domaines3 }}</span>
            </div>
          </div>
          </div>

          <!-- Titre et description -->
          <h4 class="text-lg font-semibold mb-1">{{ card.titre }}</h4>
          <p class="text-gray-700 text-sm mb-1">{{ card.description_projet }}</p>
</div>
          <!-- Bouton découvrir -->
          <div class="mb-4 ml-4">
<Btn 
      class="mb-2" 
      :url="`/projet/${card.expand?.projet?.id}`" 
      text="Voir plus" 
    /></div>
  
  </div>

          </div>
       
    </section>
  </section>
</template>


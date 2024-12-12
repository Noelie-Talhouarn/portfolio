<script setup lang="ts">
import { ref, computed } from 'vue';
import { pb } from '@/backend';
import type { CardsResponse, ProjetsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import Btn from '@/components/btn.vue';

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
const categories = ['Tous', 'Dev', 'Design', 'Projet scolaire', 'Projet personnel'];

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
    const records = await pb.collection('cards').getFullList({
      expand: 'projet', // Assurez-vous d'étendre la relation projet
    });
    
  } catch (error) {
    console.error(error);
  }

fetchCards();

}
</script>
<template>
  <section class="px-6">
    <section class="">
<div class="relative mx-auto pl-14">
    <!-- Grille principale -->
    <div class="grid-titre gradient-bg-titre"></div>
    <!-- Ligne avec des cases -->
    <div class="grid-line"></div>
    <!-- Texte superposé -->
    <h1 class=" relative -top-28">Mes Projets</h1>
    
  </div>
  
      <!-- Filtrage avec un menu déroulant sur mobile, et boutons sur écran plus large -->
      <section class="mb-6 py-2 lg:flex lg:justify-center lg:space-x-4">
        <select v-model="filter" @change="setFilter(($event.target as HTMLSelectElement).value || '')" class="block lg:hidden py-2 px-4 rounded text-sm bg-gray-200">
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>

        <div class="hidden lg:flex">
          <button
            v-for="category in categories"
            :key="category"
            @click="setFilter(category)"
            :class="[ 
              'py-2 px-4 rounded-full text-sm', 
              filter === category ? 'bg-mauve text-black' : 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
            ]"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <!-- Liste des projets filtrés -->
      <div class="flex flex-wrap gap-6 justify-center">
        <div v-for="card in filteredProjects" :key="card.id" class="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80">
          <!-- Image du projet -->
          <ImgPb :record="card" :filename="card.img" class="w-full h-auto object-cover" alt="Image du projet" />

          <div class="p-4">
            <div class="flex justify-between items-center mb-2">
              <div class="flex space-x-1">
                <span v-if="card.domaines1" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines1 }}</span>
                <span v-if="card.domaines2" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines2 }}</span>
                <span v-if="card.domaines3" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines3 }}</span>
              </div>
              <span class="text-sm text-gray-500">{{ card.date_projet }}</span>
            </div>

            <h3 class="text-lg font-semibold mb-1">{{ card.nom_projet }}</h3>
            <p class="text-gray-700 text-sm mb-4">{{ card.description_projet }}</p>

            <!-- Bouton découvrir avec lien dynamique vers la page du projet spécifique -->
            <div class="text-center">
<Btn 
      class="mb-4" 
      :url="`/projet/${card.expand?.projet?.id}`" 
      text="Voir plus" 
    /></div>

          </div>
        </div>
      </div>
    </section>
  </section>
</template>

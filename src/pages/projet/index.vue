<script setup lang="ts">
import { ref, computed } from 'vue';
import { pb } from '@/backend';
import type { ProjetsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';

// Charger la liste des projets
const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>();

// Etat du filtre actuel
const filter = ref('Tous');

// Liste des filtres disponibles
const categories = ['Tous', 'Design', 'Dev', 'Projet scolaire', 'Projet personnel'];

// Liste des projets filtrés
const filteredProjects = computed(() => {
  if (filter.value === 'Tous') {
    return listProjet;
  } else {
    return listProjet.filter(projet => projet.categorie === filter.value);
  }
});

// Fonction pour changer de filtre
const setFilter = (newFilter: string) => {
  filter.value = newFilter;
};
</script>

<template>
    <section>

    <h1 class="text-center pb-10">Mes <span class="text-mauve"> projets</span></h1>
    </section>
  <!-- Boutons de filtre -->
  <section class="flex overflow-x-auto space-x-4 mb-6 py-2 justify-center ">
    
  
    <article>
    <button
      v-for="category in categories"
      :key="category"
      @click="setFilter(category)"
      :class="[
        'py-2 px-4 rounded-full text-sm whitespace-nowrap mr-4',
        filter === category ? 'bg-mauve text-black' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      ]"
    >
      {{ category }}
    </button>
    </article>
  </section>

  <!-- Liste de projets filtrés -->
  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <li v-for="projet in filteredProjects" :key="projet.id" class="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80 mx-auto">
      <!-- Image de Projet -->
      <div class="relative">
        <ImgPb :record="projet" :filename="projet.img"
    >image du projet : {{ projet.img }}</ImgPb
  >
      </div>
      
      <!-- Contenu de la Carte -->
      <div class="p-4">
        <!-- Tags des Domaines à gauche et Date à droite -->
        <div class="flex justify-between items-center text-xs text-gray-500 mb-2">
          <div class="flex space-x-1">
            <span v-if="projet.domaines1" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">{{ projet.domaines1 }}</span>
            <span v-if="projet.domaines2" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">{{ projet.domaines2 }}</span>
            <span v-if="projet.domaines3" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">{{ projet.domaines3 }}</span>
          </div>
          <span>{{ projet.date_projet }}</span>
        </div>
        
        <!-- Nom du Projet -->
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">{{ projet.nom_projet }}</h3>
        
        <!-- Description -->
        <p class="text-gray-700 text-sm mb-4">{{ projet.description_projet }}</p>
        
        <!-- Bouton Découvrir en bas -->
        <button class="bg-mauve text-black px-3 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200 text-sm w-full">
          découvrir
        </button>
      </div>
    </li>
  </ul>
</template>

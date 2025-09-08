<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { pb } from '@/backend';
import type { ProjetsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import Btn from '@/components/btn.vue';
import { useHead } from '@unhead/vue';
import CardAccueil from '@/components/cardAccueil.vue';

useHead({
  title: ' Mes projets  | Portfolio de Noélie Talhouarn',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez mes projets web où créativité et technologies modernes se rencontrent.'
    }
  ]
});

// Charger la liste complète des projets depuis PocketBase
const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>({ sort: '-created' });

// Définir le filtre actif
const filter = ref('Tous');
const categories = ['Tous', 'Dev', 'Design', 'Communication'];

// Appliquer le filtre et retourner les projets filtrés
const filteredProjects = computed(() => {
  return filter.value === 'Tous'
    ? listProjet
    : listProjet.filter((projet) => projet.categorie === filter.value);
});

// Fonction pour changer le filtre
const setFilter = (newFilter: string) => {
  filter.value = newFilter;
};
</script>

<template>
  <section class="px-6">
    <!-- Titre principal -->
    <div class="relative mx-auto pl-14">
      <h1 class="relative mb-12 lg:text-center">Mes <span class="text-mauve">Projets</span></h1>
    </div>

    <!-- Filtrage avec un menu déroulant sur mobile, et boutons sur écran plus large -->
    <section class="mb-6 py-2 flex justify-center lg:space-x-4">
      <select v-model="filter" @change="setFilter(($event.target as HTMLSelectElement).value || '')" class="block lg:hidden py-2 px-4 rounded bg-white hover border border-mauve">
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
            filter === category ? 'bg-mauve text-black' : 'border border-mauve text-gray-800 hover:bg-mauve ' 
          ]"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Liste des projets filtrés -->
    <div class="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto px-4">
      <div
        v-for="projet in filteredProjects"
        :key="projet.id"
        class="bg-white rounded-3xl w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] shadow-lg "
      >
        <!-- Image du projet -->
        <ImgPb
          :record="projet"
          :filename="projet.img"
          class="w-full h-44 sm:h-48 md:h-52 object-cover rounded-t-3xl"
          alt="Image du projet"
          loading="lazy"
        />
        
        <div class="p-4 sm:p-6">
          <!-- Tags des domaines -->
          <div class="flex flex-wrap gap-4 mb-2">
            <span v-if="projet.domaine1" class="border border-black px-4 py-2 text-black rounded-full text-xs">
              {{ projet.domaine1 }}
            </span>
            <span v-if="projet.domaine2" class="border border-black px-4 py-2 text-black rounded-full text-xs">
              {{ projet.domaine2 }}
            </span>
            <span v-if="projet.domaine3" class="border border-black px-4 py-2 text-black rounded-full text-xs">
              {{ projet.domaine3 }}
            </span>
          </div>

          <!-- Titre et description -->
          <h4 class="text-lg font-semibold mb-1">{{ projet.titre }}</h4>
          <p class="text-gray-700 text-sm mb-1">{{ projet.description_projet }}</p>

          <!-- Bouton découvrir -->
          <div class="mt-4">
            <Btn :url="`/projet/${projet.id}`" text="Voir plus" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

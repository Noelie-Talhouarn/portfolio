<script setup lang="ts">
import { pb } from '@/backend';
import ImgPb from '@/components/ImgPb.vue';
import Btn from '@/components/btn.vue';
import type { ProjetsResponse } from '@/pocketbase-types';
import { computed, ref } from 'vue';

// Récupérer les projets depuis la collection 'projets'
const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>({
  sort: '-created' // Trier par date de création
});

// Extraire uniquement le dernier projet
const lastProject = computed(() => listProjet.slice(-1));

// Afficher 2 projets au maximum
const visibleProjects = computed(() => listProjet.slice(-2));

// Définir les props pour le composant
defineProps<{
  projet: ProjetsResponse;
}>();
</script>

<template>
  <div class="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto px-4">
    <!-- Parcourir les projets visibles -->
    <div
      v-for="projet in visibleProjects"
      :key="projet.id"
      class="bg-white rounded-3xl shadow-lg w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px]"
    >
      <!-- Image du projet -->
      <ImgPb
        :record="projet"
        :filename="projet.img"
        class="w-full h-44 sm:h-48 md:h-52 object-cover rounded-t-3xl"
        loading="lazy"
        alt="Image du projet"
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
        <p class="text-sm mb-1">{{ projet.description_projet }}</p>

        <!-- Bouton découvrir -->
        <div class="mt-4">
          <Btn :url="`/projet/${projet.id}`" text="Découvrir le projet" />
        </div>
      </div>
    </div>
  </div>
</template>

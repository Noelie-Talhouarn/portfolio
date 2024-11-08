<script setup lang="ts">
import { pb } from '@/backend';
import ImgPb from '@/components/ImgPb.vue';
import type { ProjetsResponse } from '@/pocketbase-types';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Récupérer la liste de tous les projets
const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>();

// Récupérer un seul projet en fonction de l'ID dans les paramètres de la route
const unProjet = ref<ProjetsResponse | null>(null);
if (route.params.id) {
  unProjet.value = await pb.collection('projets').getOne<ProjetsResponse>(route.params.id as string, { expand: 'chef_projet, equipes_via_projets, equipeChoisie' });
}
</script>

<template>
  <ul>
    <!-- Si vous avez un projet spécifique, afficher son image et ses informations -->
    <li v-if="unProjet">
      <ImgPb :record="unProjet" :filename="unProjet.img" class="rounded-full h-40 w-40" />
      <div>{{ unProjet.nom_projet }} - {{ unProjet.description_projet }} - {{ unProjet.date_projet }}</div>
    </li>

    <!-- Liste de tous les projets -->
    <li v-for="projet in listProjet" :key="projet.id">
      <div>{{ projet.nom_projet }} - {{ projet.description_projet }} - {{ projet.date_projet }}</div>
      <ImgPb :record="projet" :filename="projet.img" class="rounded-full h-40 w-40" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { pb } from '@/backend';
import ImgPb from '@/components/ImgPb.vue';
import Btn from '@/components/btn.vue';
import type { CardsResponse } from '@/pocketbase-types';
import { computed, ref } from 'vue';

const listProjet = await pb.collection('cards').getFullList<CardsResponse>({
  expand: 'projet',
  sort: '-created'
});
// Extraire uniquement le dernier projet
const lastProject = computed(() => listProjet.slice(-1));

// Afficher 2 projets au maximum
const visibleProjects = computed(() => listProjet.slice(-2));

const showLogin = ref(false) // Par défaut, le formulaire est caché

defineProps<{
  card: CardsResponse & {
    expand?: {
      projet?: {
        id: string;
      }
    }
  }
}>();
</script>

<template>
   <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
  <div
    v-for="card in visibleProjects"
    :key="card.id"
    class="bg-white rounded-lg shadow-lg overflow-hidden p-4"
  >
        <!-- Image du projet -->
        <ImgPb :record="card" :filename="card.img" class="w-full h-auto object-cover rounded-t-lg" alt="Image du projet" />

        <div class="p-4">
          <!-- Tags des domaines -->
          <div class="flex justify-between items-center mb-2">
            <div class="flex space-x-2">
              <span v-if="card.domaines1" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines1 }}</span>
              <span v-if="card.domaines2" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines2 }}</span>
              <span v-if="card.domaines3" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines3 }}</span>
            </div>
            <span class="text-sm text-gray-500">{{ card.date_projet }}</span>
          </div>

          <!-- Titre et description -->
          <h4 class="text-lg font-semibold mb-1">{{ card.nom_projet }}</h4>
          <p class="text-gray-700 text-sm mb-4">{{ card.description_projet }}</p>

          <!-- Bouton découvrir -->
          <div class="text-center">
   <Btn 
      class="mb-4" 
      :url="card.projet ? `/projet/${card.projet}` : '#'" 
      text="Voir plus" 
    />
          </div>
        </div>
      </div>
    </div>
</template>

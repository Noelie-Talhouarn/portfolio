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
    <div class="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto px-4">
    <div
      v-for="card in visibleProjects"
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
          <div class="flex flex-wrap gap-4">
              <span v-if="card.domaines1" class="border border-black px-4 py-2 text-black  rounded-full text-xs">{{ card.domaines1 }}</span>
              <span v-if="card.domaines2" class="border border-black px-4 py-2 text-black  rounded-full text-xs">{{ card.domaines2 }}</span>
              <span v-if="card.domaines3" class="border border-black px-4 py-2 text-black rounded-full text-xs">{{ card.domaines3 }}</span>
            </div>
            <span class="text-sm text-black font-light">{{ card.date }}</span>
          </div>

          <!-- Titre et description -->
          <h4 class="text-lg font-semibold mb-1">{{ card.titre }}</h4>
          <p class="text-gray-700 text-sm mb-1">{{ card.description_projet }}</p>

          <!-- Bouton découvrir -->
          <div class="mt-4">
   <Btn 
      class="" 
      :url="card.projet ? `/projet/${card.projet}` : '#'" 
      text="Voir plus" 
    />
          </div>
        </div>
      </div>
    </div>
</template>

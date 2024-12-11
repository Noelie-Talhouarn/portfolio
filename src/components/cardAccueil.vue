<script setup lang="ts">
import ImgPb from '@/components/ImgPb.vue';
import Btn from '@/components/btn.vue';
import type { CardsResponse } from '@/pocketbase-types';

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
  <article>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <ImgPb :record="card" :filename="card.img" class="w-full h-auto object-cover rounded-t-lg" alt="Image du projet" />

      <div class="p-4">
        <div class="flex justify-between items-center mb-2">
          <div class="flex space-x-2">
            <span v-if="card.domaines1" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines1 }}</span>
            <span v-if="card.domaines2" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines2 }}</span>
            <span v-if="card.domaines3" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines3 }}</span>
          </div>
          <span class="text-sm text-gray-500">{{ card.date_projet }}</span>
        </div>

        <h4 class="text-lg font-semibold mb-1">{{ card.nom_projet }}</h4>
        <p class="text-gray-700 text-sm mb-4">{{ card.description_projet }}</p>

        <div class="text-center">
          <Btn 
            class="mb-4" 
            :url="`/projet/${card.id}`" 
            text="Voir plus" 
          />
        </div>
      </div>
    </div>
  </article>
</template>

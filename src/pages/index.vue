<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue';
import Btn from '@/components/btn.vue';
import { pb } from '@/backend';
import type { CardsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import Login from '@/components/login.vue';

// Charger la liste complète des projets depuis PocketBase
const listProjet = await pb.collection('cards').getFullList<CardsResponse>();

// Extraire uniquement le dernier projet
const lastProject = computed(() => listProjet.slice(-1));
</script>

<template>
 <section class="gradient-bg-hero h-[520px] w-full relative z-30">
  <!-- Zone texte -->
  <div class="no-grid">
    <div class="absolute top-0 left-0 z-40 p-10">
      <h1 class="">Noélie Talhouarn</h1>
      <h3 class="">Développeuse web</h3>
    </div>
  </div>

  <!-- Grille sur toute la section -->
  <div class="grid-mask"></div>
</section>


  <section class="px-20">
    <section class="">
      <article>
        <h4 class="">A propos de moi</h4>
      </article>
      <article>
        <p>
          Je suis Noélie et je suis étudiante en BUT du multimédia et de l’internet à Montbéliard.
          Actuellement en deuxième année, je suis spécialisée dans le développement web.
        </p>
      </article>
      <article>
        <Btn class="mt-5" url="/about" text="en savoir plus" variant="default" />
      </article>
    </section>

    <section>
      <article>
        <h4>Dernier projet</h4>
      </article>
      <article v-if="lastProject.length">
        <!-- Affichage direct du dernier projet -->
        <div v-for="card in lastProject" :key="card.id" class="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80 p-4">
          <!-- Image du projet -->
          <ImgPb :record="card" :filename="card.img" class="w-full h-auto object-cover rounded-t-lg" alt="Image du projet" />

          <div class="p-4">
            <!-- Tags des domaines et année -->
            <div class="flex justify-between items-center mb-2">
              <div class="flex space-x-2">
                <span v-if="card.domaines1" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines1 }}</span>
                <span v-if="card.domaines2" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines2 }}</span>
                <span v-if="card.domaines3" class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">{{ card.domaines3 }}</span>
              </div>
              <span class="text-sm text-gray-500">{{ card.date_projet }}</span>
            </div>

            <!-- Titre et description du projet -->
            <h4 class="text-lg font-semibold mb-1">{{ card.nom_projet }}</h4>
            <p class="text-gray-700 text-sm mb-4">{{ card.description_projet }}</p>

            <!-- Bouton découvrir -->
            <div class="text-center">
              <Btn url="/projet/[id]" text="découvrir" variant="default" class="bg-mauve text-black px-4 py-2 rounded-md hover:bg-purple-600 transition-colors duration-200 text-sm" />
            </div>
          </div>
        </div>
      </article>
    </section>

    <section>
      <article>
        <h4>On collabore ?</h4>
      </article>
      <article>
        <p>
          Besoin de renfort technique ? Je suis prête à contribuer à vos projets web, que ce soit
          pour du développement front-end ou back-end. Contactez-moi pour transformer vos idées en
          solutions web performantes !
        </p>
      </article>
      <article>
        <Btn class="mt-5" url="/contact" text="Me contacter" variant="default" />
      </article>
    </section>
  </section>
  <Login />
</template>

<style>

.bg-titre {
  background-image: linear-gradient(183deg, #DBE0E1 36.49%, #B49BD1 187.59%);
}
</style>
<script setup lang="ts">
import { pb } from '@/backend'
import Btn from '@/components/btn.vue';
import ImgPb from '@/components/ImgPb.vue';
import { ref } from 'vue'
/* import Button from '@/components/Button.vue'
 */import { useRoute } from 'vue-router'

const route = useRoute('/projet/[id]')
const unProjet = ref()

// Récupérer les informations du projet en fonction de son ID
unProjet.value = await pb.collection('projets').getOne(route.params.id)

// Charger les images du projet
const imgPb = ref()
if (unProjet.value.img) {
  imgPb.value = unProjet.value.img.map((image: any) => pb.getFileUrl(unProjet.value, image))
}

/* import { useHead } from '@unhead/vue'
useHead({
  title: `Projet | ${unProjet.value?.nom_projet || 'Détails'}`,
  meta: [
    {
      name: 'description',
      content: 'Découvrez les détails du projet de l\'architecte.'
    }
  ]
}) */
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="mb-4">{{ unProjet.titre }}</h1>

    <!-- Hero Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <!-- Colonne gauche : Image -->
      <div class="order-2 lg:order-1">
        <ImgPb 
          :record="unProjet" 
          :filename="unProjet.img1" 
          class="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg" 
          alt="Image du projet" 
        />
      </div>
      
      <!-- Colonne droite : Informations -->
      <div class="order-1 lg:order-2 space-y-6">
        <p class="text-lg">{{ unProjet.date }}</p>
        <p class="text-gray-700">{{ unProjet.resume }}</p>
      </div>
    </section>

    <!-- Section descriptive -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <!-- Colonne gauche -->
      
      <div class="space-y-6">
        <h2 class="text-xl font-semibold">{{ unProjet.sous_titre1 }}</h2>
        <p class="text-gray-700">{{ unProjet.description1 }}</p>
      </div>
      <!-- Colonne droite -->
      
       <div class="space-y-6">
        <h3 class="text-xl font-semibold">{{ unProjet.sous_titre4 }}</h3>
        <p class="text-gray-700">{{ unProjet.outils }}</p>
         <h3 class="text-xl font-semibold mb-4 text-mauve">{{ unProjet.sous_titre3 }}</h3>
        <p class="text-gray-700 mb-8">{{ unProjet.description3 }}</p>
      </div>
    </section>

    <!-- Section Charte Graphique -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <!-- Colonne gauche -->
      <div class="bg-backgroundGris rounded-lg p-8">
        <h2 class="text-2xl font-semibold mb-4">{{ unProjet.sous_titre2 }}</h2>
        <p class="text-gray-700 mb-8">{{ unProjet.intertitre2 }}</p>
        <ImgPb 
          :record="unProjet" 
          :filename="unProjet.couleurs" 
          class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
          alt="Couleurs du projet" 
        />
      </div>
      
      <!-- Colonne droite -->
      <div class="bg-backgroundGris rounded-lg p-8">
       
        <ImgPb 
          :record="unProjet" 
          :filename="unProjet.typo" 
          class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
          alt="Typographie du projet" 
        />
      </div>
    </section>

    <!-- Galerie -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <div>
        <h2 class="text-2xl font-semibold mb-4">{{ unProjet.sous_titre5 }}</h2>
        <p class="text-gray-700 mb-8">{{ unProjet.galerie }}</p>
        <ImgPb 
          :record="unProjet" 
          :filename="unProjet.img5" 
          class="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
          alt="Image du projet" 
        />
      </div>
      <div class="space-y-8">
        <ImgPb 
          :record="unProjet" 
          :filename="unProjet.img6" 
          class="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
          alt="Image du projet" 
        />
      </div>

    </section>
                  <p class="text-gray-700 leading-relaxed">{{ unProjet.conclusion }}</p>


    <!-- Bouton retour -->
    <div class="flex justify-center pb-16">
      <Btn url="/projet" text="Retour aux projets" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { pb } from '@/backend'
import Btn from '@/components/btn.vue';
import ImgPb from '@/components/ImgPb.vue';
import { useHead } from '@unhead/vue';
import { ref } from 'vue'
/* import Button from '@/components/Button.vue'
 */import { useRoute } from 'vue-router'

const route = useRoute('/projet/[id]')
const unProjet = ref()

// Récupérer les informations du projet en fonction de son ID
unProjet.value = await pb.collection('projets').getOne(route.params.id)

// Charger les images du projet
const imgPb = ref([])
if (unProjet.value?.img) {
  imgPb.value = (Array.isArray(unProjet.value.img) ? unProjet.value.img : [unProjet.value.img])
    .map((image: any) => pb.getFileUrl(unProjet.value, image))
}


useHead({
  title: `Projet | ${unProjet.value?.titre|| 'Détails'}`,
  meta: [
    {
      name: 'description',
      content: 'Découvrez chacun de mes projets en détail.'
    }
  ]
}) 
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="mb-8">{{ unProjet.titre }}</h1>

    <!-- Hero Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <!-- Colonne gauche : Image -->
      <div class="order-2 lg:order-1">
        <ImgPb 
          :record="unProjet" 
          :filename="unProjet.img" 
          class="w-full h-[300px] md:h-[400px] object-cover rounded-lg" 
          alt="Image du projet" 
        />
      </div>
      
      <!-- Colonne droite : Informations -->
      <div class="order-1 lg:order-2 space-y-6">
        <p class="text-lg">{{ unProjet.date }}</p>
        <p class="">{{ unProjet.resume }}</p>
        
 <div v-if="unProjet.url">
      <Btn 
        :url="unProjet.url"
        text="Voir le projet"
        target="_blank"
        class="bg-mauve text-white py-2 px-4 rounded-md hover:opacity-90"
      />
    </div>
      </div>
    </section>

    <!-- Section descriptive -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
  <!-- Colonne gauche -->
  <div class="space-y-6">
    <div>
      <h3 class="text-xl font-semibold mb-6">{{ unProjet.sous_titre4 }}</h3>
      <div v-if="unProjet.outils" class="grid grid-cols-3 gap-2">
         <div v-for="image in unProjet.outils" :key="image">
           <ImgPb 
        :record="unProjet" 
        :filename="image" 
        class="mb-4 w-20 h-20" 
        loading="lazy"
        alt="Couleurs du projet" 
           />
         </div>
       </div>
    </div>
    <div>
      <h3 class="text-xl font-semibold mb-6">{{ unProjet.sous_titre3 }}</h3>
      <p class="">{{ unProjet.description3 }}</p>
    </div>
    
  </div>
  
  <!-- Colonne droite -->
  <div class="space-y-6">
    <h2 class="text-xl font-semibold">{{ unProjet.sous_titre1 }}</h2>
    <p class="">{{ unProjet.description1 }}</p>
  </div>
</section>

    <!-- Section Charte Graphique -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <!-- Colonne gauche -->
      <div class="bg-backgroundGris rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">{{ unProjet.sous_titre2 }}</h2>
        <p class=" mb-8">{{ unProjet.intertitre2 }}</p>
        <div v-if="unProjet.charte_graphique" class="grid grid-cols-2 gap-4">
          <div v-for="image in unProjet.charte_graphique" :key="image">
            <ImgPb 
              :record="unProjet" 
              :filename="image" 
              class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4" 
              loading="lazy"
              alt="Couleurs du projet" 
            />
          </div>
        </div>
      </div>
      
      <!-- Colonne droite -->
      
        <p class="">{{ unProjet.conclusion }}</p>
       
    </section>

    <!-- Galerie -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-4">{{ unProjet.sous_titre5 }}</h2>
      <div v-if="unProjet.galerie" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="image in unProjet.galerie" 
         :key="image"
         class="flex justify-center items-center">
          <ImgPb 
        :record="unProjet" 
        :filename="image" 
        class="transition-transform duration-300 w-[600] h-[600]" 
        loading="lazy"
        alt="Image du projet" 
          />
        </div>
      </div>
    </section>
                 


    <!-- Bouton retour -->
    <div class="flex justify-center pb-16">
      <Btn url="/projet" text="Retour aux projets" />
    </div>
  </div>
</template>
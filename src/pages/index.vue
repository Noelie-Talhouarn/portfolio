<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import Btn from '@/components/btn.vue';
import { pb } from '@/backend';
import type { CardsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import gsap from 'gsap';
import { useMouse } from '@vueuse/core';
import CardAccueil from '@/components/cardAccueil.vue';
import { useHead } from '@unhead/vue'
import IconArrow from '@/components/icons/IconArrow.vue';
import { inject, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const isLoading = inject('isLoading') as Ref<boolean>

// Récupérer les paramètres de la route
const route = useRoute()
const projet = ref<any>(null) // Projet récupéré depuis PocketBase

// Fonction pour charger les données dynamiques
const fetchProjet = async () => {
  try {
    isLoading.value = true // Activer le loader

    // Récupérer le projet par ID depuis la collection 'projets'
    const id = route.params.id
    projet.value = await pb.collection('projets').getOne(id, { expand: 'cards' })
  } catch (error) {
    console.error('Erreur lors du chargement des données :', error)
  } finally {
    isLoading.value = false // Désactiver le loader
  }
}

// Charger les données lorsque la page est montée
onMounted(() => {
  fetchProjet()
})

const scrollToHeight = () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
};

// Charger la liste complète des projets depuis PocketBase
const listProjet = await pb.collection('cards').getFullList<CardsResponse>({
  expand: 'projet',
  sort: '-created'
});
// Extraire uniquement le dernier projet
const lastProject = computed(() => listProjet.slice(-1));

// Afficher 2 projets au maximum
const visibleProjects = computed(() => listProjet.slice(-2));

const { x, y } = useMouse()

onMounted(() => {
  gsap.set('.circle', { xPercent: -50, yPercent: -50 })
  gsap.set('.circle-trail', { xPercent: -50, yPercent: -50 })
  
  // Create trail elements
  const trailCount = 5
  const trailContainer = document.querySelector('.grid-mask')
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div')
    trail.className = `circle-trail size-24 absolute bg-black blur-xl z-30 top-0 left-0mix-blend-mode-difference opacity-${20 - i * 4}`
    trailContainer?.appendChild(trail)
  }

  // Set initial positions
  gsap.set('.circle-trail', { xPercent: -50, yPercent: -50 })

  watch([x,y], () => {
    // Animate main circle
    gsap.to('.circle', {
      x: x.value,
      y: y.value,
      duration: 0.5,
    })

    // Animate trails with delay
    gsap.to('.circle-trail', {
      x: x.value,
      y: y.value,
      duration: 0.3,
      stagger: 0.05,
    })
  })
})


useHead({
  title: ' Accueil | Portfolio Noélie Talhouarn',
  meta: [
    {
      name: 'description',
      content:
        'Étudiante en développement web, découvrez mes projets, compétences et aspirations professionnelles. Contactez-moi pour vos projets web.'
    }
  ]
})
</script>

<template>
  <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>
 <section class="gradient-bg-hero h-[670px] w-full relative z-30 hero">
  
  
  <!-- Zone texte -->
<div class="absolute inset-0 flex items-center justify-center z-40 lg:-mt-20 md:-mt-[70px]">
  <div class="text-center">
  
    <h1 class="lg:text-8xl">Noélie<span class=""> Talhouarn</span></h1>
   
   
    <h2 class="lg:mt-7 md:mt-11 mt-8 ">Développeuse web</h2>
    
  </div>
  
</div>
<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
  <button @click="scrollToHeight">
    <IconArrow class="cursor-pointer transition-transform h-12 w-12" />
  </button>
</div>


  <!-- Grille sur toute la section -->
  <div class="grid-mask overflow-hidden">
    <div class="w-full h-full bg-white relative z-30"></div>
    <div class="size-24 absolute bg-black blur-xl top-0 left-0 z-40 circle mix-blend-mode-difference"></div>
  </div>
</section>


<section class="flex flex-col justify-center max-w-2xl mx-auto pt-20 px-8">
  <article>
    <h4 class=" mb-6">A propos de moi</h4>
  </article>
  <article>
    <p class="mb-6">
      Je suis Noélie et je suis étudiante en BUT du multimédia et de l'internet à Montbéliard.
      Actuellement en deuxième année, je suis spécialisée dans le développement web.
    </p>
  </article>
  <article>
    <Btn class="" url="/about" text="en savoir plus" variant="default" />
  </article>
</section>

<section class=" ">
    <section class=" ">
  <article class="flex flex-col-2 gap-20  justify-center max-w-2xl mx-auto pt-16 mb-6 px-8">
    <h4>Derniers projets</h4>
      <RouterLink
            class="block py-2 rounded-lg underline"
            to="/projet"
           
            >Voir tous les projets</RouterLink
          >
  </article>
  <article class="">
    <CardAccueil />
 
  </article>
</section>
</section>


    <section class="flex flex-col justify-center max-w-2xl mx-auto py-16 px-8">
      <article>
        <h4 class="mb-6">On collabore ?</h4>
      </article>
      <article>
        <p>
          Besoin de renfort technique ? Je suis prête à contribuer à vos projets web, que ce soit
          pour du développement front-end ou back-end. Contactez-moi pour transformer vos idées en
          solutions web performantes !
        </p>
      </article>
      <article class="mt-5">
        <Btn class="" url="/contact" text="Me contacter" variant="default" />
      </article>
    </section>
  
</template>


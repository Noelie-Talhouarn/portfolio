<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import Btn from '@/components/btn.vue';
import { pb } from '@/backend';
import type { CardsResponse, ProjetsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import gsap from 'gsap';
import { useMouse } from '@vueuse/core';
import CardAccueil from '@/components/cardAccueil.vue';
import { useHead } from '@unhead/vue'
import IconArrow from '@/components/icons/IconArrow.vue';



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

const isLoading = ref(true)
const progress = ref(0)
const loadingText = 'Chargement...'
const visibleCharacters = ref(0)
const isAnimationComplete = ref(false)

// Chargement des données
const loadData = async () => {
  const startTime = performance.now()
  const totalCharacters = loadingText.length
  let loadedCharacters = 0

  try {
    // Charger les cards et projets
    const listCard = await pb.collection('cards').getFullList<CardsResponse>({ expand: 'projet' })
    const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>()

    const endTime = performance.now()
    const loadTime = endTime - startTime
    const intervalTime = loadTime / totalCharacters

    // Animation du chargement
    const timer = setInterval(() => {
      loadedCharacters++
      visibleCharacters.value = loadedCharacters
      progress.value = Math.min((loadedCharacters / totalCharacters) * 100, 100)

      if (loadedCharacters >= totalCharacters) {
        clearInterval(timer)
        setTimeout(() => {
          isLoading.value = false
          isAnimationComplete.value = true
        }, 500)
      }
    }, intervalTime)

    return { listCard, listProjet }
  } catch (error) {
    console.error('Erreur de chargement:', error)
    isLoading.value = false
    return null
  }
}

// Exécuter le chargement
loadData()
</script>

<template>
 <!-- Loader -->
  <div v-if="isLoading" class="loader-container">
    <div class="font-titre text-black text-xl md:text-4xl lg:text-4xl text-center">
      <span 
        v-for="(char, index) in loadingText" 
        :key="index" 
        :class="{ visible: index <= Math.floor(progress / (100 / loadingText.length)) }"
      >
        {{ char }}
      </span>
    </div>
  </div>

  <!-- Contenu -->
  <div v-else>
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
      Je m'appelle Noélie et je suis étudiante en BUT du multimédia et de l'internet à Montbéliard.
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
    <Suspense>
    <template #default>
    <CardAccueil />
    </template>
  <template #fallback>
      <p>Chargement...</p>
    </template>
  </Suspense>
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
  </div>
</template>


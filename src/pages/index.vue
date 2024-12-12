<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import Btn from '@/components/btn.vue';
import { pb } from '@/backend';
import type { CardsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import Login from '@/components/login.vue';
import gsap from 'gsap';
import { useMouse } from '@vueuse/core';
import CardAccueil from '@/components/cardAccueil.vue';

// Charger la liste complète des projets depuis PocketBase
const listProjet = await pb.collection('cards').getFullList<CardsResponse>({
  expand: 'projet',
  sort: '-created'
});
// Extraire uniquement le dernier projet
const lastProject = computed(() => listProjet.slice(-1));

// Afficher 2 projets au maximum
const visibleProjects = computed(() => listProjet.slice(-2));

const showLogin = ref(false) // Par défaut, le formulaire est caché

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
</script>

<template>
 <section class="gradient-bg-hero h-[520px] w-full relative z-30 hero">
  
  <!-- Zone texte -->
<div class="absolute inset-0 flex items-center justify-center z-40 lg:-mt-20 md:-mt-[70px]">
  <div class="text-center">
  
    <h1 class="lg:text-8xl">Noélie<span class=""> Talhouarn</span></h1>
   
   
    <h2 class="lg:mt-7 md:mt-11 mt-8 ">Développeuse web</h2>
    
  </div>
</div>


  <!-- Grille sur toute la section -->
  <div class="grid-mask overflow-hidden">
    <div class="w-full h-full bg-white relative z-30"></div>
    <div class="size-24 absolute bg-black blur-xl top-0 left-0 z-40 circle mix-blend-mode-difference"></div>
  </div>
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
    <h4>Derniers projets</h4>
  </article>
  <article>
    <CardAccueil />
 
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
  <div 
  @click="showLogin = true" 
  class="w-10 h-10 bg-transparent absolute top-0 right-0 cursor-pointer"
  aria-label="Zone secrète"
>
</div>

</template>


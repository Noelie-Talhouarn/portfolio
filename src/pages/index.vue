<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import Btn from '@/components/btn.vue';
import { pb } from '@/backend';
import type { ProjetsResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';
import gsap from 'gsap';
import { useMouse } from '@vueuse/core';
import CardAccueil from '@/components/cardAccueil.vue';
import { useHead } from '@unhead/vue';
import IconArrow from '@/components/icons/IconArrow.vue';

// Fonction pour faire défiler la page vers une certaine hauteur
const scrollToHeight = () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
};

// Charger la liste complète des projets depuis PocketBase
const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>({ sort: '-created' });
// Afficher 2 projets au maximum
const visibleProjects = computed(() => listProjet.slice(0, 2));

// Gestion de l'animation des cercles avec la souris
const { x, y } = useMouse();

onMounted(() => {
  gsap.set('.circle', { xPercent: -50, yPercent: -50 });
  gsap.set('.circle-trail', { xPercent: -50, yPercent: -50 });

  const trailCount = 5;
  const trailContainer = document.querySelector('.grid-mask');
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = `circle-trail size-24 absolute bg-black blur-xl z-30 top-0 left-0 mix-blend-mode-difference opacity-${20 - i * 4}`;
    trailContainer?.appendChild(trail);
  }

  watch([x, y], () => {
    // Animation principale
    gsap.to('.circle', {
      x: x.value,
      y: y.value,
      duration: 0.5,
    });

    // Animation des traces
    gsap.to('.circle-trail', {
      x: x.value,
      y: y.value,
      duration: 0.3,
      stagger: 0.05,
    });
  });
});

// Metadata pour le SEO
useHead({
  title: 'Accueil | Portfolio Noélie Talhouarn',
  meta: [
    {
      name: 'description',
      content:
        'Étudiante en développement web, découvrez mes projets, compétences et aspirations professionnelles. Contactez-moi pour vos projets web.',
    },
  ],
});
</script>

<template>
  <section class="gradient-bg-hero h-[670px] w-full relative z-30 hero ">
    <!-- Zone texte -->
    <div class="absolute inset-0 flex items-center justify-center z-40 lg:-mt-20 md:-mt-[70px]">
      <div class="text-center">
        <h1 class="lg:text-8xl">Noélie <span>Talhouarn</span></h1>
        <h2 class="lg:mt-7 md:mt-11 mt-8">Étudiante en multimédia</h2>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center justify-center">
      <button @click="scrollToHeight" class="animate-[bounce_1.5s_ease-in-out_infinite]">
      <IconArrow class="cursor-pointer h-12 w-12" /> 
      </button>
    </div>

    <!-- Grille -->
    <div class="grid-mask overflow-hidden">
      <div class="w-full h-full bg-white relative z-30"></div>
      <div class="size-24 absolute bg-black blur-xl top-0 left-0 z-40 circle mix-blend-mode-difference"></div>
    </div>
  </section>

  <!-- A propos -->
  <section class="flex flex-col justify-center max-w-2xl mx-auto pt-20 px-8">
    <article>
      <h4 class="mb-6">A propos de moi</h4>
    </article>
    <article>
      <p class="mb-6">
        Je m'appelle Noélie et je suis étudiante en BUT du multimédia et de l'internet à Montbéliard.
        Actuellement en deuxième année, je suis spécialisée dans le développement web.
      </p>
    </article>
    <article>
      <Btn class="" url="/about" text="En savoir plus" variant="default" />
    </article>
  </section>

  

  <!-- Derniers projets -->
  <section>
    <section>
     
      <article class="flex flex-col-2 gap-20 justify-center max-w-2xl mx-auto pt-16 mb-6 px-8">
        <h4>Derniers projets</h4>
        <RouterLink class="block py-2 rounded-lg underline" to="/projet">Voir tous les projets</RouterLink>
      </article>

      <article>
         <CardAccueil />
      </article>
    </section>
  </section>

  <!-- Collaboration -->
  <section class="flex flex-col justify-center max-w-2xl mx-auto py-16 px-8">
    <article>
      <h4 class="mb-6">On collabore ?</h4>
    </article>
    <article>
      <p>
        Besoin de renfort technique ? Je suis prête à contribuer à vos projets. Contactez-moi pour transformer vos idées en
        solutions web performantes !
      </p>
    </article>
    <article class="mt-5">
      <Btn class="" url="/contact" text="Me contacter" variant="default" />
    </article>
  </section>
</template>

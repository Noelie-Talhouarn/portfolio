<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import Btn from '@/components/btn.vue'
import { pb } from '@/backend'
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from '@/components/ImgPb.vue'
import gsap from 'gsap'
import { useMouse } from '@vueuse/core'
import CardAccueil from '@/components/cardAccueil.vue'
import { useHead } from '@unhead/vue'
import IconArrow from '@/components/icons/IconArrow.vue'

// Fonction pour faire défiler la page vers une certaine hauteur
const scrollToHeight = () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
}

// Charger la liste complète des projets depuis PocketBase
const listProjet = await pb.collection('projets').getFullList<ProjetsResponse>({ sort: '-created' })
// Afficher 2 projets au maximum
const visibleProjects = computed(() => listProjet.slice(0, 2))

// Gestion de l'animation des cercles avec la souris
const { x, y } = useMouse()

onMounted(() => {
  gsap.set('.circle', { xPercent: -50, yPercent: -50 })
  gsap.set('.circle-trail', { xPercent: -50, yPercent: -50 })

  const trailCount = 5
  const trailContainer = document.querySelector('.grid-mask')
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div')
    trail.className = `circle-trail size-24 absolute bg-black blur-xl z-30 top-0 left-0 mix-blend-mode-difference opacity-${20 - i * 4}`
    trailContainer?.appendChild(trail)
  }

  watch([x, y], () => {
    // Animation principale
    gsap.to('.circle', {
      x: x.value,
      y: y.value,
      duration: 0.5
    })

    // Animation des traces
    gsap.to('.circle-trail', {
      x: x.value,
      y: y.value,
      duration: 0.3,
      stagger: 0.05
    })
  })
})

// Metadata pour le SEO
useHead({
  title: 'Accueil | Portfolio Noélie Talhouarn',
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
  <section class="gradient-bg-hero hero relative z-30 h-[670px] w-full">
    <!-- Zone texte -->
    <div class="absolute inset-0 z-40 flex items-center justify-center md:-mt-[70px] lg:-mt-20">
      <div class="text-center">
        <h1 class="lg:text-8xl">Noélie <span>Talhouarn</span></h1>
        <h2 class="mt-8 md:mt-11 lg:mt-7">Étudiante en multimédia</h2>
      </div>
    </div>
    <div
      class="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 transform flex-col items-center justify-center"
    >
      <button @click="scrollToHeight" class="animate-[bounce_1.5s_ease-in-out_infinite]">
        <IconArrow class="h-12 w-12 cursor-pointer" />
      </button>
    </div>

    <!-- Grille -->
    <div class="grid-mask overflow-hidden">
      <div class="relative z-30 h-full w-full bg-white"></div>
      <div
        class="circle mix-blend-mode-difference absolute left-0 top-0 z-40 size-24 bg-black blur-xl"
      ></div>
    </div>
  </section>

  <!-- A propos -->
  <section class="mx-auto flex max-w-2xl flex-col justify-center px-8 pt-20">
    <article>
      <h4 class="mb-6">A propos de moi</h4>
    </article>
    <article>
      <p class="mb-6">
        Je m'appelle Noélie et je suis étudiante en 3ème année de BUT du multimédia et de l'internet
        à Montbéliard. Je suis actuellement en recherche de stage en communication/design pour une
        durée de 16 semaines, à partir du 9 fevrier 2026.
      </p>
    </article>
    <article>
      <Btn class="" url="/about" text="En savoir plus" variant="default" />
    </article>
  </section>

  <!-- Derniers projets -->
  <section>
    <section>
      <article class="flex-col-2 mx-auto mb-6 flex max-w-2xl justify-center gap-20 px-8 pt-16">
        <h4>Derniers projets</h4>
        <RouterLink class="block rounded-lg py-2 underline" to="/projet"
          >Voir tous les projets</RouterLink
        >
      </article>

      <article>
        <CardAccueil />
      </article>
    </section>
  </section>

  <!-- Collaboration -->
  <section class="mx-auto flex max-w-2xl flex-col justify-center px-8 py-16">
    <article>
      <h4 class="mb-6">On collabore ?</h4>
    </article>
    <article>
      <p>
        Besoin de renfort technique ? Je suis prête à contribuer à vos projets. Contactez-moi pour
        transformer vos idées en solutions web performantes !
      </p>
    </article>
    <article class="mt-5">
      <Btn class="" url="/contact" text="Me contacter" variant="default" />
    </article>
  </section>
</template>

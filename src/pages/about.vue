<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconAudiovisuel from '@/components/icons/IconAudiovisuel.vue'
import IconCss from '@/components/icons/IconCss.vue'
import IconFigma from '@/components/icons/IconFigma.vue'
import IconHtml from '@/components/icons/IconHtml.vue'
import IconIllustrator from '@/components/icons/IconIllustrator.vue'
import IconPhotoshop from '@/components/icons/IconPhotoshop.vue'
import IconPocketbase from '@/components/icons/IconPocketbase.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTrello from '@/components/icons/IconTrello.vue'
import IconVuejs from '@/components/icons/IconVuejs.vue'
import IconWordpress from '@/components/icons/IconWordpress.vue'
import { useHead } from '@unhead/vue'
import { RouterLink, RouterView } from 'vue-router/auto'

useHead({
  title: ' A Propos  | Portfolio de Noélie Talhouarn',
  meta: [
    {
      name: 'description',
      content: 'Je suis Noélie Talhouarn, une développeuse web. Découvrez mes compétences !'
    }
  ]
})
</script>

<template>
  <section class="px-8">
    <section>
      <article>
        <h1 class="text-center text-black">A <span class="text-mauve">Propos</span></h1>
      </article>
      <article class="lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
        <article class="">
          <img
            src="/public/img/moi2.png"
            alt="Photo de profil de Noélie Talhouarn"
            class="flex-justify-center h-42 w-42 mb-9 flex rounded-full lg:mx-auto lg:mt-9 lg:h-80 lg:w-80"
          />
        </article>

        <article class="lg:mb-10 lg:mr-20">
          <p class="lg:mb-5 lg:mt-14">
            Je m'appelle Noélie, j’ai 19 ans et je suis étudiante en 2ème année de BUT MMI (Métier
            du multimédia et de l’internet).
          </p>
          <p>
           Au cours de ma première année en BUT MMI, j’ai participé à des projets concrets mêlant conception de maquettes et développement de sites web. J’ai consolidé mes compétences en HTML, CSS et JavaScript, tout en maîtrisant des outils modernes comme Vue.js et Tailwind CSS pour créer des interfaces dynamiques et responsives. En webdesign, j’ai utilisé Figma et Adobe Creative Suite pour concevoir des maquettes ergonomiques, et exploré des solutions avec WordPress. Ces expériences m’ont permis de développer une approche rigoureuse et polyvalente, essentielle pour mener à bien des projets alliant design et développement.
          </p>
          <a
            class="font-roboto-mono font-bold text-mauve"
            href="/img/cv-portfolio-normandie-monteliard.pdf"
            download
            >Mon cv</a
          >
        </article>
      </article>

      <!-- Section Compétences -->
      <section class="flex justify-center py-8">
        <article class="w-full max-w-7xl">
          <h2 class="mb-6 lg:ml-14">Mes <span class="text-mauve">compétences</span></h2>

          <article
            class="mt-6 grid grid-cols-2 justify-items-center gap-8 lg:grid-cols-4 lg:justify-items-center"
          >
            <!-- Développement Web -->
            <div>
              <p class="mb-4 text-lg font-semibold">Développement web</p>
              <div class="flex flex-col items-start space-y-4">
                <div class="flex items-center space-x-3">
                  <IconHtml class="h-12 w-12" />
                  <p>HTML</p>
                </div>
                <div class="flex items-center space-x-3">
                  <IconCss class="h-12 w-12" />
                  <p>CSS</p>
                </div>
                <div class="flex items-center space-x-3">
                  <IconVuejs class="h-12 w-12" />
                  <p>Vue.js</p>
                </div>
                <div class="flex items-center space-x-3">
                  <IconTailwind class="h-12 w-12" />
                  <p>Tailwind CSS</p>
                </div>
                <div class="flex items-center space-x-3">
                  <IconWordpress class="h-12 w-12" />
                  <p>WordPress</p>
                </div>
                <div class="flex items-center space-x-3">
                  <IconPocketbase class="h-12 w-12" />
                  <p>PocketBase</p>
                </div>
              </div>
            </div>

            <!-- Design -->
            <div>
              <p class="mb-4 text-lg font-semibold">Design</p>
              <div class="flex flex-col items-start space-y-4">
                <div class="flex items-center space-x-3">
                  <IconFigma class="h-12 w-12" />
                  <p>Figma</p>
                </div>
                <div class="flex items-center space-x-3">
                  <IconIllustrator class="h-12 w-12" />
                  <p>Illustrator</p>
                </div>
                <div class="flex items-center space-x-3">
                  <IconPhotoshop class="h-12 w-12" />
                  <p>Photoshop</p>
                </div>
              </div>
            </div>

            <!-- Audiovisuel -->
            <div class="">
              <p class="mb-4 text-lg font-semibold">Audiovisuel</p>
              <div class="flex items-center space-x-3">
                <IconAudiovisuel class="h-12 w-12" />
                <p>Davinci Resolve</p>
              </div>
            </div>

            <!-- Gestion de Projet -->
            <div>
              <p class="mb-4 text-lg font-semibold">Gestion de projet</p>
              <div class="flex items-center space-x-3">
                <IconTrello class="h-12 w-12" />
                <p>Trello</p>
              </div>
            </div>
          </article>
        </article>
      </section>
    </section>
  </section>
</template>

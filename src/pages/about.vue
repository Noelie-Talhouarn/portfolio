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
import { RouterLink, RouterView } from 'vue-router/auto'

</script>

<template>
  <section class="px-8">
    <section>
      <article class="wrapper">
        <h1 class="lg:text-center"><span class="text-mauve">A propos</span> de moi</h1>
      </article>
      <article class="lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
        <article class="">
          <img
            src="/src/img/moi.webp"
            alt="Photo de profil"
            class="flex-justify-center h-42 w-42 mb-9 flex rounded-full lg:mx-auto lg:mt-9 lg:h-80 lg:w-80"
          />
        </article>

        <article class="lg:mr-20">
          <p class="lg:mb-5 lg:mt-14">
            Je suis Noélie, j’ai 19 ans et je suis étudiante en 2ème année de BUT MMI (Métier du
            multimédia et de l’internet).
          </p>
          <p>
            Au cours de ma 1ère année en BUT MMI, j’ai déjà eu l’opportunité de m’investir
            pleinement dans des projets concrets, de la conception de maquettes à la réalisation de
            sites web complets. Cette expérience enrichissante a été un véritable terrain
            d’apprentissage, me permettant de développer des compétences en webdesign, avec une
            maîtrise d’outils tels qu’Adobe Creative Suite et Figma. Ma compétence dans les langages
            HTML, CSS et JavaScript et vue.js et taiwlind css, ainsi que ma connaissance de
            WordPress, sont des atouts qui sont pour moi important d’acquérir.
          </p>
          <a class="font-bold text-mauve font-roboto-mono" href="/src/img/cv-portfolio-normandie-monteliard.pdf">Mon cv</a>
        </article>
      </article>


  <!-- Section Compétences -->
  <section class="py-8 flex justify-center">
    <article class="max-w-7xl w-full">
      <h2 class="text-2xl font-semibold mb-6 lg:ml-14">
        Mes <span class="text-mauve">compétences</span>
      </h2>

      <article class="mt-6 grid grid-cols-2 gap-8 justify-items-center lg:grid-cols-4 lg:justify-items-center">
        
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

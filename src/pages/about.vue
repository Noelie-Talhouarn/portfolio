<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconAudiovisuel from '@/components/icons/IconAudiovisuel.vue'
import IconFigma from '@/components/icons/IconFigma.vue'
import IconIllustrator from '@/components/icons/IconIllustrator.vue'
import IconPhotoshop from '@/components/icons/IconPhotoshop.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTrello from '@/components/icons/IconTrello.vue'
import { RouterLink, RouterView } from 'vue-router/auto'
</script>

<template>
  <section>
    <article class="wrapper">
      <h1 class=""><span class="text-mauve">A propos</span> de moi</h1>
    </article>
    <article>
      <img src="/src/img/moi.webp" alt="Photo de profil" class="mx-auto h-40 w-40 rounded-full" />
    </article>
    <article>
      <p>
        Je suis Noélie, j’ai 19 ans et je suis étudiante en 2ème année de BUT MMI (Métier du
        multimédia et de l’internet).
      </p>
      <p>
        Au cours de ma 1ère année en BUT MMI, j’ai déjà eu l’opportunité de m’investir pleinement
        dans des projets concrets, de la conception de maquettes à la réalisation de sites web
        complets. Cette expérience enrichissante a été un véritable terrain d’apprentissage, me
        permettant de développer des compétences en webdesign, avec une maîtrise d’outils tels
        qu’Adobe Creative Suite et Figma. Ma compétence dans les langages HTML, CSS et JavaScript et
        vue.js et taiwlind css, ainsi que ma connaissance de WordPress, sont des atouts qui sont
        pour moi important d’acquérir.
      </p>
    </article>
  </section>
  <section class="">
    <article>
      <h2>Mes <span class="text-mauve">compétences</span></h2>
    </article>
    <article class="grid grid-cols-2 justify-center">
      <div>
        <div>
          <p>Developpement web</p>
        </div>
        <div>
        <div>
          <IconTailwind class="h-11 w-11" />
        </div>
        <div>
          <p>taiwlind</p>
        </div>
        </div>
      </div>
      <div>
        <p>Design</p>
        <div>
          <IconFigma class="h-11 w-11" />
        </div>
        <div>
          <p>Figma</p>
        </div>
        <div>
          <IconIllustrator class="h-11 w-11" />
        </div>
        <div>
          <p>Illustrator</p>
        </div>
        <div>
          <IconPhotoshop class="h-11 w-11" />
        </div>
        <div>
          <p>Photoshop</p>
        </div>
      </div>
      <div>
        <p>Audiovisuel</p>
        <div class="grid grid-cols-2">
        <div class="">
          <IconAudiovisuel class="h-15 w-15" />
        </div>
        <div>
          <p>Davinci Resolve</p>
        </div>
        </div>
      </div>
      <div class="">
        <p>Gestion de projet</p>
        <div class="grid grid-cols-2">
          <div>
            <IconTrello class="h-11 w-11" />
          </div>
          <div>
            <p>Trello</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

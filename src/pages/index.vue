<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Grille from '@/components/grille.vue'; 

import Btn from '@/components/btn.vue'
import { RouterLink, RouterView } from 'vue-router/auto'
</script>

<template>
  <section>
    
  </section>
  <Grille />
    <!-- <div class="p-4">
    <Grid :columns="8" :rows="8" />
  </div> --> 
  <section class="p-8">
    <section>
      <article>
        <h2>A propos de moi</h2>
      </article>
      <article>
        <p>
          Je suis Noélie et je suis étudiante en BUT du multimédia et de l’internet à Montbéliard.
          Actuellement en deuxième année, je suis spécialisée dans le développement web.
        </p>
      </article>
      <article>
        <Btn url="/about">En savoir plus</Btn> 
      </article>
    </section>
    <section>
      <article>
        <h2>Derniers projets</h2>
      </article>
      <article>carrousel</article>
    </section>
    <section>
      <article>
        <h2>On collabore ?</h2>
      </article>
      <article>
        <p>
          Besoin de renfort technique ? Je suis prête à contribuer à vos projets web, que ce soit
          pour du développement front-end ou back-end. Contactez-moi pour transformer vos idées en
          solutions web performantes !
        </p>
      </article>
      <article>
        <Btn url="/contact">C'est par ici</Btn> 
      </article>
    </section>
  </section>
</template>


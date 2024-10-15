<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue';
import HeaderPage from './components/headerPage.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="text-2xl bg-slate-400">Template Principal (Menu/Footer...)</h1>
      <nav>
        <LogInOut />
        <ul>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/projet">Projet</RouterLink>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <HeaderPage />
    <h1>Porfolio</h1>
    <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" :key="$route.path" />
    </Suspense>
  </RouterView>
  </main>
</template>
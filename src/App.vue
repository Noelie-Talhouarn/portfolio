<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue';
import HeaderPage from './components/headerPage.vue';
import FooterPage from './components/footerPage.vue';

import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'
import Loader from '@/components/loader.vue'

// Variable pour suivre l'état de chargement
const isLoading = ref(false)

provide('isLoading', isLoading)


// Gestion des changements de route
const router = useRouter()

router.beforeEach((to, from, next) => {
  isLoading.value = true // Démarre le loader
  next()
})

router.afterEach(() => {
  isLoading.value = false // Arrête le loader
})
</script>

<template>
<HeaderPage />
  <main class="pt-20">
     <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>
    <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" :key="$route.path" />
    </Suspense>
  </RouterView>
</main>
<FooterPage />
</template>

<style>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #6b46c1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
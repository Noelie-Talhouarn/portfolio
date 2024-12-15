<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue';
import HeaderPage from './components/headerPage.vue';
import FooterPage from './components/footerPage.vue';

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Loader from '@/components/loader.vue'

// Variable pour suivre l'état de chargement
const isLoading = ref(false)

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
     <Loader v-if="isLoading" />
    <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" :key="$route.path" />
    </Suspense>
  </RouterView>
</main>
<FooterPage />
</template>
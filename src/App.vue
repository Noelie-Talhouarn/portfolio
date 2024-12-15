<script setup lang="ts">
import { ref, provide } from 'vue'
import { useRouter } from 'vue-router'
import HeaderPage from './components/headerPage.vue'
import FooterPage from './components/footerPage.vue'

</script>

<template>
  <!-- Header -->
  <HeaderPage />

  <!-- Loader Global -->
  

  <!-- Contenu Principal -->
  <main class="pt-20 relative">
    
    <Suspense>
      <!-- Composant dynamique avec fallback -->
      <template #default>
        <RouterView v-slot="{ Component }">
          <component :is="Component" :key="$route.path" />
        </RouterView>
      </template>
      
      <!-- Fallback Loader -->
      <template #fallback>
        <p>Chargement...</p>
      </template>
    </Suspense>
    
  </main>

  <!-- Footer -->
  <FooterPage />
</template>


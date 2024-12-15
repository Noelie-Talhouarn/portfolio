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
        
      </template>
    </Suspense>
    
  </main>

  <!-- Footer -->
  <FooterPage />
</template>

<style>
/* Loader Global */
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

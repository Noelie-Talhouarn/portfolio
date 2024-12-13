<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { pb } from '@/backend'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPopup = ref(false)

const loginAdmin = async () => {
  try {
    await pb.admins.authWithPassword(email.value, password.value)
    showPopup.value = true
    
    // Faire disparaître le popup après 2 secondes
    setTimeout(() => {
      showPopup.value = false
      // Redirection vers la page projet après connexion réussie
      router.push('/projet')
    }, 2000)
  } catch (error) {
    console.error('Erreur de connexion:', error)
  }
}

// Fonction de déconnexion
const logout = async () => {
  pb.authStore.clear()
  router.push('/')
}
</script>
<template>
  <div class="max-w-sm mx-auto p-6">
    <!-- Popup de confirmation centré -->
    <div v-if="showPopup" 
         class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded shadow-lg z-50">
      <p class="text-center">✓ Connexion réussie !</p>
    </div>

    <!-- Formulaire de connexion -->
    <div v-if="!pb.authStore.isValid">
      <h2 class="text-2xl font-bold mb-6 text-center">Connexion Admin</h2>
      <form @submit.prevent="loginAdmin" class="space-y-4">
        <div>
          <input 
            type="email" 
            v-model="email"
            placeholder="Email admin"
            required
            class="w-full p-2 border rounded"
          >
        </div>

        <div>
          <input 
            type="password" 
            v-model="password"
            placeholder="Mot de passe admin"
            required
            class="w-full p-2 border rounded"
          >
        </div>

        <button 
          type="submit"
          class="w-full bg-mauve text-white p-2 rounded hover:bg-opacity-90 transition"
        >
          Se connecter
        </button>
      </form>
    </div>

    <!-- Bouton déconnexion -->
    <div v-else class="text-center">
      <button 
        @click="logout" 
        class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Se déconnecter
      </button>
    </div>
  </div>
</template>
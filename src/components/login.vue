<template>
  <div class="max-w-sm mx-auto p-6">
    <!-- Bouton ou zone "secrète" pour afficher le formulaire -->
    <div v-if="!showLogin">
      <button 
        @click="showLogin = true" 
        class="text-transparent hover:text-gray-600 transition"
        aria-label="Zone secrète"
      >
        .
      </button>
    </div>

    <!-- Formulaire de connexion admin -->
    <div v-else>
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
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Se connecter
        </button>
      </form>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PocketBase from 'pocketbase'

const router = useRouter()
const pb = new PocketBase('http://127.0.0.1:8090/')

// Champs pour l'authentification
const email = ref('')
const password = ref('')

// Contrôle de la visibilité du formulaire
const showLogin = ref(false) // Par défaut, le formulaire est caché

// Authentification admin
const loginAdmin = async () => {
  try {
    await pb.admins.authWithPassword(email.value, password.value)
    alert('Vous êtes connecté')
    router.push('/addprojets') // Redirige après connexion
  } catch (error) {
    alert('Identifiants incorrects')
  }
}
</script>

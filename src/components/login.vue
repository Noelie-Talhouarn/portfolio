<template>
  <div class="max-w-sm mx-auto p-6">
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
      <button v-if="pb.authStore.isValid" @click="logoutAdmin" class="bg-red-500 text-white py-2 px-4 rounded">
      Se déconnecter
    </button>
<button v-if="pb.authStore.isValid" @click="logoutAdmin" class="bg-red-500 text-white py-2 px-4 rounded">
      Se déconnecter
    </button>
    </form>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PocketBase from 'pocketbase'

const router = useRouter()
const pb = new PocketBase('http://127.0.0.1:8090/')

const email = ref('')
const password = ref('')

const loginAdmin = async () => {
  try {
    // Utilise l'authentification admin de Pocketbase
    await pb.admins.authWithPassword(email.value, password.value)
    alert('vous etes connecté')
    
    // Si la connexion réussit, redirige vers la page d'administration
    router.push('/addprojets')
  } catch (error) {
    alert('Identifiants incorrects')
  }
}

const logoutAdmin = () => {
  pb.authStore.clear(); // Efface l'état d'authentification
  router.push('/'); // Redirige vers la page de connexion
};
</script>
<script setup lang="ts">
import { pb } from '@/backend'
import type { ProjetsResponse, CardsResponse } from '@/pocketbase-types'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const projet = reactive<ProjetsResponse>({} as ProjetsResponse)
const card = reactive({
  nom_projet: '',
  date_projet: '',
  description_projet: '',
  domaines1: '',
  domaines2: '',
  domaines3: '',
  img: null as File | null,
  projet: '' // ID du projet associé
})

const submit = async (event: Event) => {
  event.preventDefault()
  try {
    // Créer d'abord le projet
    const newProjet = await pb.collection('projets').create(projet)
    
    // Créer ensuite la carte associée
    const formData = new FormData()
    formData.append('nom_projet', projet.titre)
    formData.append('date_projet', projet.date)
    formData.append('description_projet', projet.resume)
    formData.append('projet', newProjet.id) // Lier la carte au projet
    if (card.img) {
      formData.append('img', card.img)
    }
    formData.append('domaines1', card.domaines1)
    formData.append('domaines2', card.domaines2)
    formData.append('domaines3', card.domaines3)

    await pb.collection('cards').create(formData)

    router.push(`/projet/${newProjet.id}`)
  } catch (error) {
    console.error(error)
  }
}

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    card.img = input.files[0]
  }
}

</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class=" mb-8 text-center">Créer un nouveau projet</h1>

    <form @submit="submit" class="max-w-2xl mx-auto space-y-6">
      <!-- Champs du projet -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Titre du projet</label>
        <input 
          v-model="projet.titre" 
          type="text" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Description du projet</label>
        <input 
          v-model="projet.resume" 
          type="text" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Date</label>
        <input 
          v-model="projet.date" 
          type="date" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
      </div>

      <!-- Champs pour la carte -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Domaine 1</label>
        <input 
          v-model="card.domaines1" 
          type="text" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Domaine 2</label>
        <input 
          v-model="card.domaines2" 
          type="text" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Domaine 3</label>
        <input 
          v-model="card.domaines3" 
          type="text" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Image</label>
        <input 
          type="file" 
          @change="handleImageUpload"
          class="mt-1 block w-full"
          accept="image/*"
        >
      </div>

      <button 
        type="submit"
        class="bg-mauve text-white px-4 py-2 rounded-md hover:bg-opacity-90"
      >
        Créer le projet
      </button>
    </form>
  </div>
</template>
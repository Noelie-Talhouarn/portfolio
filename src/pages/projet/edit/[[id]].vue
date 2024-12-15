<script setup lang="ts">
import { pb } from '@/backend'
import type { ProjetsResponse, CardsResponse } from '@/pocketbase-types'
import ImgPb from '@/components/ImgPb.vue' // Chemin correct pour votre composant ImgPb
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router/auto'

const router = useRouter()
const route = useRoute('/projet/edit/[[id]]')

// Vérifier si l'utilisateur est authentifié
onMounted(() => {
  if (!pb.authStore.isValid) {
    router.push('/')
    return
  }
})

// Initialiser les données du projet et de la carte
const projet = reactive<ProjetsResponse>(
  route.params.id
    ? await pb.collection('projets').getOne(route.params.id)
    : {
        titre: '',
        date: '',
        resume: '',
        sous_titre1: '',
        description1: '',
        sous_titre2: '',
        description2: '',
        sous_titre3: '',
        description3: '',
        img: null, // Image associée au projet
      }
)

const card = reactive<CardsResponse>(
  route.params.id
    ? await pb.collection('cards').getFirstListItem(`projet="${route.params.id}"`)
    : {
        nom_projet: '',
        date_projet: '',
        description_projet: '',
        categorie: '',
        img: null, // Image associée à la carte
        domaines1: '',
        domaines2: '',
        domaines3: '',
        projet: '',
      }
)

// Références pour les aperçus des images
const previewProjetImg = ref<string | null>(projet.img ? pb.files.getUrl(projet, projet.img) : null)
const previewCardImg = ref<string | null>(card.img ? pb.files.getUrl(card, card.img) : null)

// Gestion de l'upload des images
const handleImageUpload = (event: Event, type: 'projet' | 'card') => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]

    if (type === 'projet') {
      projet.img = file
      previewProjetImg.value = URL.createObjectURL(file)
    } else if (type === 'card') {
      card.img = file
      previewCardImg.value = URL.createObjectURL(file)
    }
  }
}

// Soumettre le formulaire
const submit = async (event: Event) => {
  event.preventDefault()
  if (!pb.authStore.isValid) return
  
  try {
    // Créer ou mettre à jour le projet
    const projetFormData = new FormData()
    Object.entries(projet).forEach(([key, value]) => {
      if (value !== null) {
        projetFormData.append(key, value)
      }
    })
    const newProject = projet.id
      ? await pb.collection('projets').update(projet.id, projetFormData)
      : await pb.collection('projets').create(projetFormData)

    // Créer ou mettre à jour la carte associée
    const cardFormData = new FormData()
    cardFormData.append('nom_projet', projet.titre)
    cardFormData.append('description_projet', projet.resume)
    cardFormData.append('projet', newProject.id)
    cardFormData.append('categorie', card.categorie)
    if (card.img) {
      cardFormData.append('img', card.img)
    }
    cardFormData.append('domaines1', card.domaines1)
    cardFormData.append('domaines2', card.domaines2)
    cardFormData.append('domaines3', card.domaines3)

    if (card.id) {
      await pb.collection('cards').update(card.id, cardFormData)
    } else {
      await pb.collection('cards').create(cardFormData)
    }

    router.push(`/projet/${newProject.id}`)
  } catch (error) {
    console.error('Erreur lors de la création ou mise à jour:', error)
  }
}
</script>


<template>
  <h1 class="text-3xl font-bold text-center text-blue-600">Ajouter ou Modifier un projet</h1>

  <!-- Formulaire -->
  <form class="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto p-6 space-y-6" method="post" @submit="submit">
    <!-- Titre du projet -->
    <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Titre du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.titre"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
    </div>
       <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Résumé du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.resume"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
         <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Titre du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.sous_titre1"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
    </div>
       <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Titre du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.description1"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
    </div>
       <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Titre du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.sous_titre2"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
    </div>
       <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Titre du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.sous_titre3"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
    </div>
       <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Titre du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.description3"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
    </div>
       <div class="space-y-1">
      <label for="titre" class="block text-gray-700 font-medium">Titre du projet</label>
      <input
        type="text"
        id="titre"
        v-model="projet.sous_titre4"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le titre du projet"
        required
      />
    </div>
    <ImgPb
        v-if="projet.couleurs"
        class="rounded-full w-40 h-40 mb-4 shadow-lg"
        :filename="projet.couleurs"
        :record="userEdit"
      />
    </div>

    <!-- Image associée au projet -->
    <div class="space-y-1">
      <label for="projet-img" class="block text-gray-700 font-medium">Image du projet</label>
      <input
        type="file"
        id="projet-img"
        @change="handleImageUpload($event, 'projet')"
        class="w-full"
        accept="image/*"
      />

      <!-- Aperçu de l'image du projet -->
      <div v-if="previewProjetImg" class="mt-4">
        <ImgPb :src="previewProjetImg" alt="Aperçu de l'image du projet" class="w-full h-auto rounded-md" />
      </div>
    </div>

    <!-- Image associée à la carte -->
    <div class="space-y-1">
      <label for="card-img" class="block text-gray-700 font-medium">Image de la carte</label>
      <input
        type="file"
        id="card-img"
        @change="handleImageUpload($event, 'card')"
        class="w-full"
        accept="image/*"
      />

      <!-- Aperçu de l'image de la carte -->
      <div v-if="previewCardImg" class="mt-4">
        <ImgPb :src="previewCardImg" alt="Aperçu de l'image de la carte" class="w-full h-auto rounded-md" />
      </div>
    </div>

    <!-- Autres champs -->
    <div class="space-y-1">
      <label for="categorie" class="block text-gray-700 font-medium">Catégorie</label>
      <input
        type="text"
        id="categorie"
        v-model="card.categorie"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez une catégorie"
      />
    </div>

    <!-- Domaines -->
    <div v-for="i in 3" :key="i" class="space-y-1">
      <label :for="'domaines' + i" class="block text-gray-700 font-medium">Domaine {{ i }}</label>
      <input
        :id="'domaines' + i"
        v-model="card[`domaines${i}`]"
        type="text"
        class="w-full border-gray-300 rounded-md p-2"
        placeholder="Entrez le domaine {{ i }}"
      />
    </div>

    <!-- Bouton de soumission -->
    <div class="flex justify-center space-x-4 mt-6">
      <button
        type="submit"
        class="bg-orange-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-700"
      >
        {{ projet.id ? 'Mettre à jour' : 'Créer' }}
      </button>
    </div>
  </form>
</template>



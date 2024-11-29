<template>
  <div v-if="pb.authStore.isValid">
    <h2 class="text-2xl font-bold mb-6 text-center">Ajouter un Projet</h2>

    <form @submit.prevent="addProject" class="space-y-4">
      <div>
        <input
          type="text"
          v-model="nomProjet"
          placeholder="Nom du projet"
          required
          class="w-full p-2 border rounded"
        >
      </div>

      <div>
        <textarea
          v-model="descriptionProjet"
          placeholder="Description du projet"
          required
          class="w-full p-2 border rounded"
        ></textarea>
      </div>

      <div>
        <input
          type="text"
          v-model="categorieProjet"
          placeholder="Catégorie du projet"
          required
          class="w-full p-2 border rounded"
        >
      </div>

      <button 
        type="submit" 
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Ajouter le projet
      </button>
    </form>

    <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
    <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
import { useRouter } from 'vue-router';
const router = useRouter();


const pb = new PocketBase('http://127.0.0.1:8090/')

// Champs de formulaire pour le projet
const nomProjet = ref('')
const descriptionProjet = ref('')
const categorieProjet = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const addProject = async () => {
  try {
    // Vérifier que l'administrateur est connecté
    if (!pb.authStore.isValid) {
      errorMessage.value = 'Vous devez être connecté en tant qu\'administrateur pour ajouter un projet.'
      return
    }

    // Créer le projet dans la collection "projets" de PocketBase
    await pb.collection('projets').create({
      titre: nomProjet.value,
      description: descriptionProjet.value,
      categorie: categorieProjet.value
    })

    // Afficher un message de succès et réinitialiser les champs du formulaire
    successMessage.value = 'Projet ajouté avec succès !'
    errorMessage.value = ''
    nomProjet.value = ''
    descriptionProjet.value = ''
    categorieProjet.value = ''
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Erreur lors de l\'ajout du projet.'
    successMessage.value = ''
  }
}

onMounted(() => {
  if (!pb.authStore.isValid) {
    alert('Vous devez être connecté en tant qu\'administrateur pour accéder à cette page.');
    router.push('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
  }
});
</script>

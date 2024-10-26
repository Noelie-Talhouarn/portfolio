<script setup lang="ts">
import { ref } from 'vue';
import PocketBase from 'pocketbase';
import btn from '@/components/btn.vue';

// Initialiser PocketBase
const pb = new PocketBase('http://127.0.0.1:8090'); // Remplacez par l'URL de votre instance PocketBase

// État du formulaire
const formData = ref({
  nom_contact: '',
  prenom_contact: '',
  email_contact: '',
 objet_contact: '',
  message_contact: ''
})

// État pour gérer le chargement et les message_contacts
const isSubmitting = ref(false)
const statusmessage_contact = ref('')

// Fonction de soumission
const handleSubmit = async (e: Event) => {
  e.preventDefault()
  
  try {
    isSubmitting.value = true
    
    // Créer un nouvel enregistrement dans PocketBase
    const record = await pb.collection('contact').create({
      nom_contact: formData.value.nom_contact,
      prenom_contact: formData.value.prenom_contact,
      email_contact: formData.value.email_contact,
     objet_contact: formData.value.objet_contact,
      message_contact: formData.value.message_contact,
      date: new Date().toISOString()
    })

    // Réinitialiser le formulaire
    formData.value = {
      nom_contact: '',
      prenom_contact: '',
      email_contact: '',
      objet_contact: '',
      message_contact: ''
    }

    statusmessage_contact.value = 'message envoyé avec succès !'
    
  } catch (error) {
    console.error('Erreur:', error)
    statusmessage_contact.value = 'Une erreur est survenue lors de l\'envoi.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="justify-center text-black">
    <div class="">
      <h1 class="p-4 text-center">Me <span class="text-mauve">contacter</span></h1>
    </div>
    <div class="lg:mx-40">
      <p class="m-6 font-normal lg:text-lg">
        Pour toute question, collaboration ou simplement pour échanger, n'hésitez pas à me contacter via le formulaire ci-dessous. 
        Je serai ravie de vous répondre dans les plus brefs délais !
      </p>

      <!-- Affichage du message_contact de statut -->
      <div v-if="statusmessage_contact" 
           :class="statusmessage_contact.includes('succès') ? 'text-green-600' : 'text-red-600'"
           class="text-center my-4">
        {{ statusmessage_contact }}
      </div>
    
      <form @submit="handleSubmit" class="space-y-4 mx-6">
        <div>
          <label for="nom_contact" class="block text-base font-medium lg:text-lg">Prénom</label>
          <input 
            v-model="formData.nom_contact"
            type="text" 
            id="nom" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : Lola"
            required
          >
        </div>
        
        <div>
          <label for="prenom_contact" class="block text-base font-medium lg:text-lg">Nom</label>
          <input 
            v-model="formData.prenom_contact"
            type="text" 
            id="prenom" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : Durant"
            required
          >
        </div>
        
        <div>
          <label for="email_contact" class="block text-base font-medium lg:text-lg">email</label>
          <input 
            v-model="formData.email_contact"
            type="email" 
            id="email" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : lola.durant@gmail.com"
            required
          >
        </div>
        
        <div>
          <label for="object_contact" class="block text-base font-medium lg:text-lg">Objet</label>
          <input 
            v-model="formData.objet_contact"
            type="text" 
            id="object" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : Infos sur les tarifs"
            required
          >
        </div>
        
        <div>
          <label for="message_contact" class="block text-base font-medium lg:text-lg">message</label>
          <textarea 
            v-model="formData.message_contact"
            id="message" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : Bonjour, j'aimerai..."
            required
          ></textarea>
        </div>
        
        <div class="flex justify-center items-center">
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="mb-8 lg:mb-12"
          >
            {{ isSubmitting ? 'Envoi...' : 'Envoyer' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
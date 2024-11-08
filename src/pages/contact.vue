<script setup lang="ts">
import { ref } from 'vue';
import PocketBase from 'pocketbase';

// Initialiser PocketBase
const pb = new PocketBase('http://127.0.0.1:8090');

// État du formulaire
const formData = ref({
  nom_contact: '',
  prenom_contact: '',
  email_contact: '',
  objet_contact: '',
  message_contact: ''
});

const isSubmitting = ref(false);
const statusMessage = ref('');
const messageType = ref<'success' | 'error'>('success');

// Fonction de soumission
const handleSubmit = async (e: Event) => {
  e.preventDefault();
  
  try {
    isSubmitting.value = true;
    statusMessage.value = 'Envoi en cours...';
    
    // Créer un nouvel enregistrement dans PocketBase
    await pb.collection('contact').create({
      ...formData.value,
      date: new Date().toISOString()
    });

    // Réinitialiser le formulaire
    formData.value = {
      nom_contact: '',
      prenom_contact: '',
      email_contact: '',
      objet_contact: '',
      message_contact: ''
    };

    messageType.value = 'success';
    statusMessage.value = 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.';
    
  } catch (error) {
    console.error('Erreur:', error);
    messageType.value = 'error';
    statusMessage.value = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
  } finally {
    isSubmitting.value = false;
    
    // Effacer le message de succès après 5 secondes
    if (messageType.value === 'success') {
      setTimeout(() => {
        statusMessage.value = '';
      }, 5000);
    }
  }
};
</script>

<template>
  <section class="justify-center text-black">
    <div class="">
      <h1 class="p-8 lg:text-center">Me <span class="text-mauve">contacter</span></h1>
    </div>
    
    <div class="lg:mx-40">
      <p class="p-8 font-normal lg:text-lg">
        Pour toute question, collaboration ou simplement pour échanger, n'hésitez pas à me contacter via le formulaire ci-dessous. 
        Je serai ravie de vous répondre dans les plus brefs délais !
      </p>

      <!-- Message de statut -->
      <div v-if="statusMessage" 
           :class="[
             'text-center my-4 p-4 rounded-md',
             messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
           ]">
        {{ statusMessage }}
      </div>
    
      <form @submit="handleSubmit" class="space-y-4 mx-6">
        <div>
          <label for="prenom" class="block text-base font-medium lg:text-lg">Prénom</label>
          <input 
            v-model="formData.prenom_contact"
            type="text" 
            id="prenom" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : Lola"
            required
          >
        </div>
        
        <div>
          <label for="nom" class="block text-base font-medium lg:text-lg">Nom</label>
          <input 
            v-model="formData.nom_contact"
            type="text" 
            id="nom" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : Durant"
            required
          >
        </div>
        
        <div>
          <label for="email" class="block text-base font-medium lg:text-lg">Email</label>
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
          <label for="objet" class="block text-base font-medium lg:text-lg">Objet</label>
          <input 
            v-model="formData.objet_contact"
            type="text" 
            id="objet" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" 
            placeholder="ex : Infos sur les tarifs"
            required
          >
        </div>
        
        <div>
          <label for="message" class="block text-base font-medium lg:text-lg">Message</label>
          <textarea 
            v-model="formData.message_contact"
            id="message" 
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base h-32" 
            placeholder="ex : Bonjour, j'aimerai..."
            required
          ></textarea>
        </div>
        
        <div class="flex justify-center items-center">
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="px-6 py-2 bg-mauve text-white rounded-md hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50 mb-8 lg:mb-12"
          >
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
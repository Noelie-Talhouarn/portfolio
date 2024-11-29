<template>
  <section class="flex justify-center  py-10">
    <div class="w-full max-w-3xl p-10 ">
      <h1 class="text-center text-4xl font-bold text-gray-700 mb-6">
        <span class="text-black">Me </span><span class="text-purple-500">contacter</span>
      </h1>
      <p class="text-center text-gray-600 mb-10">
        Pour toute question, collaboration ou simplement pour échanger, n'hésitez pas à me contacter via le formulaire ci-dessous. Je serai ravie de vous répondre dans les plus brefs délais !
      </p>
      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <div class="sm:col-span-1">
          <label class="block text-base font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            v-model="formData.prenom_contact"
            name="prenom_contact"
            placeholder="ex : Lola"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-mauve hover:border-2 hover:border-mauve placeholder-gray-500"
          />
        </div>
        <div class="sm:col-span-1">
          <label class="block text-base font-medium text-gray-700">Nom</label>
          <input
            type="text"
            v-model="formData.nom_contact"
            name="nom_contact"
            placeholder="ex : Durant"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-mauve hover:border-2 hover:border-mauve placeholder-gray-500"
          />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-base font-medium text-gray-700">Email</label>
          <input
            type="email"
            v-model="formData.email_contact"
            name="email_contact"
            placeholder="ex : lola.durant@gmail.com"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-mauve hover:border-2 hover:border-mauve placeholder-gray-500"
          />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-base font-medium text-gray-700">Objet</label>
          <input
            type="text"
            v-model="formData.objet_contact"
            name="objet_contact"
            placeholder="ex : Infos sur les tarifs"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-mauve hover:border-2 hover:border-mauve placeholder-gray-500"
          />
        </div>
        <div class="sm:col-span-2">
          <label class="block text-base font-medium text-gray-700">Message</label>
          <textarea
            v-model="formData.message_contact"
            name="message_contact"
            rows="5"
            placeholder="ex : Bonjour, j'aimerais..."
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-mauve hover:border-2 hover:border-mauve placeholder-gray-500"
          ></textarea>
        </div>
        <div class="sm:col-span-2 flex justify-center">
          <button type="submit" class="w-full sm:w-auto bg-purple-500 text-white py-3 px-6 rounded-md hover:bg-purple-600 transition duration-200">
            Envoyer
          </button>
        </div>
      </form>
      <p v-if="responseMessage" class="mt-6 text-center text-gray-700">{{ responseMessage }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PocketBase from 'pocketbase';

// Initialisation de PocketBase
const pb = new PocketBase('http://127.0.0.1:8090'); // Remplace par l'URL de ton instance PocketBase

// Champs du formulaire liés à PocketBase
const formData = ref({
  nom_contact: '',
  prenom_contact: '',
  email_contact: '',
  objet_contact: '',
  message_contact: '',
});

// Message de réponse après la soumission
const responseMessage = ref('');

const handleSubmit = async () => {
  try {
    // Enregistrement dans PocketBase
    await pb.collection('contact').create(formData.value);
    
    // Préparation des données pour Web3Forms
    const web3FormsData = {
      access_key: '7ddb9634-765c-4c24-bcd6-3df399b17e7f', // Remplace par ta clé Web3Forms
      subject: 'Nouveau message portfolio',
      name: `${formData.value.prenom_contact} ${formData.value.nom_contact}`,
      email: formData.value.email_contact,
      message: formData.value.message_contact,
      Object: formData.value.objet_contact,
      botcheck: ''
    };

    // Envoi de l'email via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(web3FormsData)
    });

    if (response.ok) {
      responseMessage.value = 'Message envoyé avec succès !';
      formData.value = {
        nom_contact: '',
        prenom_contact: '',
        email_contact: '',
        objet_contact: '',
        message_contact: ''
      };
    } else {
      responseMessage.value = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
    }
  } catch (error) {
    console.error('Erreur:', error);
    responseMessage.value = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
  }
};
</script>

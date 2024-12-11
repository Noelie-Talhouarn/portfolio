<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="text-center mb-6">
      <h1 class="text-4xl font-bold text-black">
        Me <span class="text-purple-500 italic">contacter</span>
      </h1>
      <p class="text-gray-600 mt-2">
        Pour toute question, collaboration ou simplement pour échanger, n'hésitez pas à me contacter
        via le formulaire ci-dessous. Je serai ravie de vous répondre dans les plus brefs délais !
      </p>
    </div>
    <form
      @submit.prevent="submitForm"
      class="bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <div>
        <label for="name" class="block text-gray-700 font-bold mb-2">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          placeholder="ex : Durant"
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label for="prenom" class="block text-gray-700 font-bold mb-2">Prénom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          v-model="prenom"
          placeholder="ex : Enzo"
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="ex : enzo.durant@gmail.com"
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label for="objet" class="block text-gray-700 font-bold mb-2">Objet</label>
        <input
          type="text"
          id="objet"
          name="objet"
          v-model="objet"
          placeholder="ex : renseignements"
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="message"
          placeholder="ex : Bonjour, votre profil..."
          class="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="5"
        ></textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-purple-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-600 transition duration-300"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const WEB3FORMS_ACCESS_KEY = "7ddb9634-765c-4c24-bcd6-3df399b17e7f";
const name = ref("");
const prenom = ref("");
const email = ref("");
const objet = ref("");
const message = ref("");

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      prenom: prenom.value,
      email: email.value,
      objet: objet.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
};
</script>
<template>
  <div class="max-w-4xl mx-auto px-4 py-8 ">
    <div class=" mb-6">
      <h1 class=" text-black text-center">
        Me <span class="text-mauve">contacter</span>
      </h1>
      <p class="mt-7">
        Pour toute question, collaboration ou simplement pour échanger, n'hésitez pas à me contacter
        via le formulaire ci-dessous. Je serai ravie de vous répondre dans les plus brefs délais !
      </p>
    </div>
    <form class=" shadow-md rounded-lg p-6 space-y-4">
      <div>
        <label for="name" class="block text-gray-700 font-bold mb-2">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          placeholder="ex : Durant"
          class="w-full px-4 py-2 border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve"
        />
      </div>

      <div>
        <label for="prenom" class="block text-gray-700 font-bold mb-2">Prénom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          v-model="prenom"
          placeholder="ex : Clara"
          class="w-full px-4 py-2 border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve"
        />
      </div>

      <div>
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="ex : clara.durant@gmail.com"
          class="w-full px-4 py-2 border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve"
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
          class="w-full px-4 py-2 border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="message"
          placeholder="ex : Bonjour, votre profil..."
          class="w-full px-4 py-2 border border-mauve rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve"
          rows="5"
        ></textarea>
      </div>

      <div class="text-center">
        <!-- Utilisation de votre composant Btn -->
        <Btn
          url="/contact"
          text="Envoyer"
          @click="submitForm"
        />
      </div>
    </form>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Btn from '@/components/btn.vue'; // Assurez-vous que le chemin est correct
import { useHead } from '@unhead/vue';


useHead({
  title: ' Contact  | Portfolio de Noélie Talhouarn',
  meta: [
    {
      name: 'description',
      content:
        'Recrutez une développeuse web passionnée et compétente ! Contactez Noélie Talhouarn pour un stage ou une collaboration en développement front-end et back-end.'
    }
  ]
})

const WEB3FORMS_ACCESS_KEY = "7ddb9634-765c-4c24-bcd6-3df399b17e7f";
const name = ref("");
const prenom = ref("");
const email = ref("");
const objet = ref("");
const message = ref("");

const submitForm = async (event?: Event) => {
  if (event) {
    event.preventDefault(); // Empêche le comportement par défaut de rechargement de la page
  }

  try {
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
      console.log("Message envoyé avec succès :", result);
      alert("Votre message a été envoyé avec succès !");
      // Réinitialiser les champs du formulaire
      name.value = "";
      prenom.value = "";
      email.value = "";
      objet.value = "";
      message.value = "";
    } else {
      console.error("Erreur lors de l'envoi du message :", result);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  } catch (error) {
    console.error("Erreur réseau ou système :", error);
    alert("Une erreur réseau s'est produite. Veuillez réessayer.");
  }
};


</script>

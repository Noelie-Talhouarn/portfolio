<script setup lang="ts">
import btn from '@/components/btn.vue';
/* useHead({
  title: ' Contact  | Fujimoto Expo',
  meta: [
    {
      name: 'description',
      content:
        'Pour toutes questions sur l’exposition, n’hésitez pas à me contacter par le biais de ce formulaire.'
    }
  ]
}) */
</script>

<template>
    <section class="justify-center text-black">
    <div class="">
        <h1 class="p-4 text-center">Me <span class="text-mauve">contacter</span></h1>
    </div>
    <div class="lg:mx-40">
    <p class="m-6 font-normal  lg:text-lg">Pour toute question, collaboration ou simplement pour échanger, n'hésitez pas à me contacter via le formulaire ci-dessous. Je serai ravie de vous répondre dans les plus brefs délais !</p>
    
    <form action="/submit_contact" method="post" class="space-y-4 mx-6">
        <div>
            <label for="fname" class="block text-base font-medium lg:text-lg">Prénom</label>
            <input type="text" id="fname" name="fname" class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" placeholder="ex : Lola">
        </div>
        <div>
            <label for="lname" class="block text-base font-medium lg:text-lg">Nom</label>
            <input type="text" id="lname" name="lname" class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" placeholder="ex : Durant">
        </div>
        <div>
            <label for="email" class="block text-base font-medium lg:text-lg">Email</label>
            <input type="email" id="email" name="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" placeholder="ex : lola.durant@gmail.com">
        </div>
        <div>
            <label for="subject" class="block text-base font-medium lg:text-lg">Objet</label>
            <input type="text" id="subject" name="subject" class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" placeholder="ex : Infos sur les tarifs">
        </div>
        <div>
            <label for="message" class="block text-base font-medium lg:text-lg">Message</label>
            <textarea id="message" name="message" class="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm lg:text-base" placeholder="ex : Bonjour, j’aimerai..."></textarea>
        </div>
        <div class="flex justify-center items-center">

	    <btn class="mb-8 lg:mb-12" url="/contact" text="Envoyer" />

        </div>
    </form>
    </div>
</section>
</template>
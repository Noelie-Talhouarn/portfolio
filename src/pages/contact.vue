<script setup lang="ts">
import Iconmail from '@/components/icons/Iconmail.vue';
import Iconphone from '@/components/icons/Iconphone.vue';
import Iconsmartphone from '@/components/icons/Iconsmartphone.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'Contact | Portfolio de Noélie Talhouarn',
  meta: [
    {
      name: 'description',
      content:
        "Pour toute question ou collaboration, contactez-moi par téléphone, chat ou email. Disponible pour répondre à vos besoins."
    }
  ]
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4">
    <!-- Titre de la section -->
    <div class=" mb-16">
      <h1 class="text-center">
        Me <span class="text-mauve">contacter</span>
      </h1>
      <p class="mt-14 lg:px-20 mb-12 px-4">
        Besoin de renfort technique ? Je suis prête à contribuer à vos projets web, que ce soit pour du développement front-end ou back-end.
      </p>
    </div>

    <!-- Bloc des contacts -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-16">
      <div class="max-w-md mx-auto w-full">
      <!-- Par chat -->
      <div class="p-6 shadow-lg rounded-lg bg-white border">
        <div class="flex justify-center text-4xl mb-4 text-mauve">
        <Iconsmartphone class="h-10 w-10"/>
        </div>
        <h2 class="text-xl font-bold mb-2">Sur les Réseaux sociaux</h2>
        <p class="">
        Vous pouvez me contacter via <a href="https://www.linkedin.com/in/noelie-talhouarn/"><span class="text-sky-600"> Linkedin</span></a> ou <a href="https://www.instagram.com/noelie.tl_/"><span class="text-orange-500">Instagram</span></a>
        </p>
      </div>
      </div>

      <div class="max-w-md mx-auto w-full">
      <!-- Par mail -->
      <div class="p-6 shadow-lg rounded-lg bg-white border">
        <div class="flex justify-center text-4xl mb-4 text-mauve">
        <Iconmail class="h-10 w-10"/>
        </div>
        <h2 class="text-xl font-bold mb-2">Par mail</h2>
        <p class="">
        Écrivez-moi à l'adresse mail suivante :
        <br />
        <a href="mailto:noelie.talhouarn@gmail.com" class="font-medium lg:hover:text-purple-900">
          noelie.talhouarn@gmail.com
        </a>
        </p>
      </div>
      </div>
    </div>
    </div>
</template>





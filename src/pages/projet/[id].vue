<script setup lang="ts">
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue';
import { ref } from 'vue'
/* import Button from '@/components/Button.vue'
 */import { useRoute } from 'vue-router'

const route = useRoute()
const unProjet = ref()

// Récupérer les informations du projet en fonction de son ID
unProjet.value = await pb.collection('projets').getOne(route.params.id)

// Charger les images du projet
const imgPb = ref()
if (unProjet.value.img) {
  imgPb.value = unProjet.value.img.map((image) => pb.getFileUrl(unProjet.value, image))
}

/* import { useHead } from '@unhead/vue'
useHead({
  title: `Projet | ${unProjet.value?.nom_projet || 'Détails'}`,
  meta: [
    {
      name: 'description',
      content: 'Découvrez les détails du projet de l\'architecte.'
    }
  ]
}) */
</script>

<template>
  <div>
        <ImgPb :record="unProjet" :filename="unProjet.img1" class="w-full h-auto object-cover" alt="Image du projet" />
    <h1 class="font-judson mt-4 ml-6 lg:text-center mb-6">{{ unProjet.titre }}</h1>
    <div class="lg:grid lg:grid-cols-2 lg:gap-20 lg:max-w-screen-lg mx-auto p-6">
      <p class="mb-6 order-1 lg:order-none lg:mt-28">{{ unProjet.date }}</p>
      <div class="order-2 lg:order-none">
<!--         <img :src="imgPb[1]" alt="Image secondaire" />
 -->        <p class="text-center mt-1 lg:text-base text-sm">
          <i>{{ unProjet.intertitre }}</i>
        </p>
      </div>
      <p class="mt-4 mb-6 order-3 lg:order-none lg:mt-20">{{ unProjet.value?.paragraphe2 }}</p>
      <div class="order-4 lg:order-none">
<!--         <img :src="imgPb[2]" alt="Autre image du projet" />
 -->        <p class="text-center mt-1 lg:text-base text-sm">
          <i>{{ unProjet.description }}</i>
        </p>
      </div>
    </div>
    <p class="lg:mx-36 mx-6">{{ unProjet.outils }}</p>
    <p class="lg:mx-36 mx-6">{{ unProjet.intertitre2 }}</p>
    <p class="lg:mx-36 mx-6">{{ unProjet.soustitre1 }}</p>
        <ImgPb :record="unProjet" :filename="unProjet.img2" class="w-full h-auto object-cover" alt="Image du projet" />
        <p class="lg:mx-36 mx-6">{{ unProjet.soustitre2 }}</p>
        <ImgPb :record="unProjet" :filename="unProjet.img3" class="w-full h-auto object-cover" alt="Image du projet" />
        <p class="lg:mx-36 mx-6">{{ unProjet.intertitre3 }}</p>
        <ImgPb :record="unProjet" :filename="unProjet.img4" class="w-full h-auto object-cover" alt="Image du projet" />
        <p class="lg:mx-36 mx-6">{{ unProjet.description2 }}</p>
        <p class="lg:mx-36 mx-6">{{ unProjet.description3 }}</p>
        <p class="lg:mx-36 mx-6">{{ unProjet.description4 }}</p>
        <p class="lg:mx-36 mx-6">{{ unProjet.description5 }}</p>
                <ImgPb :record="unProjet" :filename="unProjet.img5" class="w-full h-auto object-cover" alt="Image du projet" />
                <ImgPb :record="unProjet" :filename="unProjet.img6" class="w-full h-auto object-cover" alt="Image du projet" />
        <p class="lg:mx-36 mx-6">{{ unProjet.description6 }}</p>
                        <ImgPb :record="unProjet" :filename="unProjet.img7" class="w-full h-auto object-cover" alt="Image du projet" />
        <p class="lg:mx-36 mx-6">{{ unProjet.description7 }}</p>
        <p class="lg:mx-36 mx-6">{{ unProjet.mockup }}</p>



    <div class="flex justify-center mb-6">
      <Button class="mb-4 lg:mb-6 mt-10" url="/projet" text="Retour aux projets" />
    </div>
  </div>
</template>

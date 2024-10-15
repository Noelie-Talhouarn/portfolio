<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import GithubIcon from './icons/githubIcon.vue';
import LinkedinIcon from './icons/linkedinIcon.vue';
import InstagramIcon from './icons/instagramIcon.vue';


const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}
</script>
<template>
  <header
    class="fixed top-0 left-0 right-0 flex items-center justify-between px-4 gap-8 h-20 bg-backgroundGris z-50"
    :class="{ 'bg-backgroundGris': activeMenu }"
  >
    <RouterLink to="/" aria-label="Accueil" @click="closeMenu">
      <IconLogo aria-hidden="true"  class="h-12 w-12" />
    </RouterLink>
    <button
      class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-black *:transition *:duration-300"
      @click="activeMenu = !activeMenu"
      aria-label="Menu"
      :aria-expanded="activeMenu ? 'true' : 'false'"
      aria-controls="menu-principal"
      >
      <span :class="{ 'translate-y-[7px] rotate-45': activeMenu }"></span>
      <span :class="{ 'opacity-0': activeMenu }"></span>
      <span :class="{ '-translate-y-[10px] -rotate-45 ': activeMenu }"></span>
    </button>
    <nav
      class="transform transition-transform duration-500 ease-in-out invisible opacity-0 flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-white lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100 lg:justify-end"
      :class="{ '!visible !opacity-100 bg-gradient-to-b from-backgroundGris to-mauve': activeMenu }"
      v-scroll-lock="activeMenu"
    >
      <ul
        class="flex flex-col gap-8 lg:flex-row text-2xl text-black text-center lg:text-xl lg:mr-8"
      >
        <li>
          <RouterLink
            class="block p-4 rounded-lg lg:hover:underline"
            to="/architecte"
            @click="closeMenu"
            >Accueil</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="block p-4 rounded-lg lg:hover:underline"
            to="/batiment"
            @click="closeMenu"
            >Projets</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="block p-4 rounded-lg lg:hover:underline"
            to="/contact"
            @click="closeMenu"
            >Contact</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="block p-4 rounded-lg lg:hover:underline"
            to="/infos"
            @click="closeMenu"
            >A propos</RouterLink
          >
        </li>
      <ul class="flex gap-12 justify-center">
        <li>
          <a href="https://github.com/Noelie-Talhouarn" aria-label="Github"
            ><GithubIcon class="fill-white" aria-hidden="true"
          /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/noelie-talhouarn/" aria-label="Linkedin"
            ><LinkedinIcon class="fill-white" aria-hidden="true"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/noelie.tl_/" aria-label="Instagram"
            ><InstagramIcon class="fill-white" aria-hidden="true"
          /></a>
        </li>
      </ul>
      </ul>
      <div class="flex items-center justify-center gap-4 px-4">
        <Button variant="outlined" text="Se connecter" url="/connexion" @click="closeMenu" aria-label="Se connecter" aria-controls="menu-principal" />
        <Button variant="dark" text="S'inscrire" url="/inscription" @click="closeMenu" aria-label="S'inscrire" aria-controls="menu-principal" />
      </div>
    </nav>
  </header>
  <main class="pt-20">
  </main>
</template>


<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import GithubIcon from './icons/githubIcon.vue'
import LinkedinIcon from './icons/linkedinIcon.vue'
import InstagramIcon from './icons/instagramIcon.vue'
import { pb } from '@/backend'


const router = useRouter()
const activeMenu = ref(false)
const isLoggedIn = ref(pb.authStore.isValid)
const adminName = ref(pb.authStore.model?.email)

// Surveiller les changements d'authentification
pb.authStore.onChange(() => {
  isLoggedIn.value = pb.authStore.isValid
  adminName.value = pb.authStore.model?.email
})

function closeMenu() {
  activeMenu.value = false
}
</script>
<template>
  <header
    class="fixed top-0 left-0 right-0 flex items-center justify-between px-4 gap-8 h-20 z-50"
    :class="{ 'bg-backgroundGris': activeMenu }"
  >
  <div v-if="isLoggedIn" class="text-mauve">
      Bonjour {{ adminName }}
    </div>
    <RouterLink to="/" aria-label="Accueil" @click="closeMenu">
      <IconLogo aria-hidden="true"  class="h-12 w-12" />
    </RouterLink>
    <button
      class="relative z-10 flex h-9 w-11 flex-col justify-between p-2 lg:hidden *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-black *:transition *:duration-300 border border-mauve rounded-md bg-backgroundGris"
      @click="activeMenu = !activeMenu"
      aria-label="Menu"
      :aria-expanded="activeMenu ? 'true' : 'false'"
      aria-controls="menu-principal"
      >
      <span :class="{ 'translate-y-[7px] rotate-45': activeMenu }"></span>
      <span :class="{ 'opacity-0': activeMenu }"></span>
      <span :class="{ '-translate-y-[9px] -rotate-45 ': activeMenu }"></span>
</button>
    <nav
      class="transform transition-transform duration-500 ease-in-out invisible opacity-0 flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-white lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100 lg:justify-end"
      :class="{ '!visible !opacity-100 bg-gradient-to-b from-backgroundGris to-mauve': activeMenu }"
      v-scroll-lock="activeMenu"
    >
      <ul
        class="flex flex-col gap-8 lg:flex-row text-2xl text-black text-center lg:text-lg lg:px-4 lg:border lg:border-mauve lg:rounded-3xl lg:bg-backgroundGris "
      >
        <li>
          <RouterLink
            class="block py-2 rounded-lg lg:hover:underline"
            to="/"
            @click="closeMenu"
            >Accueil</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="block py-2 rounded-lg lg:hover:underline"
            to="/projet"
            @click="closeMenu"
            >Projets</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="block py-2 rounded-lg lg:hover:underline"
            to="/contact"
            @click="closeMenu"
            >Contact</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="block py-2 rounded-lg lg:hover:underline"
            to="/about"
            @click="closeMenu"
            >A propos</RouterLink
          >
        </li>
        <li>
          
        </li>
      <ul class="flex gap-12 justify-center lg:hidden">
        <li>
          <a href="https://github.com/Noelie-Talhouarn" aria-label="Github"
            ><GithubIcon/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/noelie-talhouarn/" aria-label="Linkedin"
            ><LinkedinIcon/></a>
        </li>
        <li>
          <a href="https://www.instagram.com/noelie.tl_/" aria-label="Instagram"
            ><InstagramIcon/></a>
        </li>
      </ul>
      </ul>
      <div class="flex items-center justify-center gap-4 px-4">
        <Button variant="outlined" text="Se connecter" url="/connexion" @click="closeMenu" aria-label="Se connecter" aria-controls="menu-principal" />
        <Button variant="dark" text="S'inscrire" url="/inscription" @click="closeMenu" aria-label="S'inscrire" aria-controls="menu-principal" />
      </div>
    </nav>
  </header>
</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router'
import GithubIcon from './icons/githubIcon.vue'
import InstagramIcon from './icons/instagramIcon.vue'
import LinkedinIcon from './icons/linkedinIcon.vue'
import IconGithub from './icons/IconGithub.vue'
import IconInstagram from './icons/IconInstagram.vue'
</script>

<template>
  <footer class="px-24 lg:px-60">
    <div class="border-t border-t-black p-2 pt-4">
      <nav
        class="gap-8 space-y-8 px-5 *:break-inside-avoid *:space-y-3  lg:col-start-3 lg:columns-3 lg:px-0 lg:flex lg:justify-center"
      >
        <ul class="flex justify-center items-center gap-12">
          <li class="flex items-center">
            <a href="https://github.com/Noelie-Talhouarn" aria-label="Github" class="flex items-center">
              <IconGithub class="" />
            </a>
          </li>
          <li class="flex items-center ">
            <a href="https://www.linkedin.com/in/noelie-talhouarn/" aria-label="Linkedin" class="flex items-center">
              <LinkedinIcon class="" />
            </a>
          </li>
          <li class="flex items-center ">
            <a href="https://www.instagram.com/noelie.tl_/" aria-label="Instagram" class="flex items-center">
              <IconInstagram class="" />
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <div class="lg:flex lg:justify-center lg:gap-4 text-center">
          <a class="text-center text-xs lg:text-base mt-4 lg:hover:text-purple-900" href="mailto:noelie.talhouarn@gmail.com">noelie.talhouarn@gmail.com</a>
        <p class="text-center text-xs lg:text-base lg:mt-4">©2024 Noélie Talhouarn.</p>
 
    </div>
     </div>
       
    </div>
  </footer>
</template>

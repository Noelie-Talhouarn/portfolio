<script setup lang="ts">
import { RouterLink } from 'vue-router'
import GithubIcon from './icons/githubIcon.vue'
import InstagramIcon from './icons/instagramIcon.vue'
import LinkedinIcon from './icons/linkedinIcon.vue'
import IconGithub from './icons/IconGithub.vue'
</script>

<template>
  <footer class="border-t border-t-black p-2">
    <div class="lg:px-50 lg:grid lg:grid-cols-3">
      <nav
        class="gap-8 space-y-8 px-5 *:break-inside-avoid *:space-y-3 lg:col-span-1 lg:col-start-1 lg:columns-3 lg:px-0"
      >
        <ul class="flex justify-center gap-12">
          <li>
            <a href="https://github.com/Noelie-Talhouarn" aria-label="Github"><IconGithub /></a>
          
        </li>
          <li>
            <a href="https://www.linkedin.com/in/noelie-talhouarn/" aria-label="Linkedin"
              ><LinkedinIcon
            /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/noelie.tl_/" aria-label="Instagram"
              ><InstagramIcon
            /></a>
          </li>
        </ul>
      </nav>
      <div>
        <p class="text-center text-xs lg:text-base">©2024 Noélie Talhouarn.</p>
      </div>
    </div>
  </footer>
</template>

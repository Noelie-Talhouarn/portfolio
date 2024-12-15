<script setup lang="ts">
const props = withDefaults( 
  defineProps<{
    variant?: 'default',
    url?: string,
    text?: string,
    target?: string
  }>(),
  { variant: 'default', target: '_self' }
)

// Définition des classes selon le variant
const variantClass = {
  default: 'bg-mauve rounded-md text-black',
}
</script>

<template>
  <!-- Si l'URL est externe (contient http ou https), utiliser une balise <a> -->
  <a
    v-if="url?.startsWith('http')"
    :href="url"
    :target="target"
    class="bg-mauve text-black px-2 rounded-xl gap-4 py-2 text-xs font-bold uppercase lg:text-sm"
    :class="variantClass[props.variant]"
  >
    {{ text }}
  </a>

  <!-- Sinon, utiliser RouterLink pour les liens internes -->
  <RouterLink
    v-else
    :to="url"
    class="bg-mauve text-black px-2 rounded-xl gap-4 py-2 text-xs font-bold uppercase lg:text-sm"
    :class="variantClass[props.variant]"
  >
    {{ text }}
  </RouterLink>
</template>

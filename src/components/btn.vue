<script setup lang="ts">

const props = withDefaults( 
	defineProps<{
		variant?: 'default' 
	  url?: string
	  text?: string
	}>(),
  { variant: 'default' }
)

const variantClass = {
  default: 'bg-mauve rounded-md text-black',
  
}

</script>

<template>
  <RouterLink
		class="inline-flex items-center gap-4 px-6 py-4 text-xs font-bold uppercase tracking-wide transition duration-300 ease-in-out lg:px-8 lg:py-6 lg:text-sm"
		:class="variantClass[props.variant]"
		:to="`${url}`">
    <ArrowIcon :class="props.variant === 'default' ? 'stroke-black' : 'stroke-white'" />
    {{ text }}
  </RouterLink>
</template>
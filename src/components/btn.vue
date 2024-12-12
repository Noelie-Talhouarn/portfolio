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
		class=" bg-mauve  text-black  px-2 rounded-xl gap-4 py-2 text-xs font-bold uppercase lg:text-sm"
		:class="variantClass[props.variant]"
		:to="`${url}`">
    <ArrowIcon :class="props.variant === 'default' ? 'stroke-black' : 'stroke-white'" />
    {{ text }}
  </RouterLink>
</template>
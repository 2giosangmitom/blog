<script setup lang="ts">
const props = defineProps<{
  asChild?: boolean;
}>();
</script>

<template>
  <UiPrimitive :as-child="props.asChild" as="span" class="font-bold text-2xl"
    >2giosangmitom</UiPrimitive
  >
</template>

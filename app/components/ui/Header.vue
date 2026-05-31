<script setup lang="ts">
import type { NavigationItem } from "~/types/navigation";

defineProps<{
  items: NavigationItem[];
}>();
</script>

<template>
  <header class="flex justify-between items-center">
    <AppLogo />

    <nav class="space-x-2xl">
      <UiButton v-for="link in items" :key="link.to" asChild>
        <NuxtLink :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </UiButton>
    </nav>
  </header>
</template>

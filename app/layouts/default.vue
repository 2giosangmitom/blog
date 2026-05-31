<script setup lang="ts">
import type { NavigationItem } from "~/types/navigation";

const navItems: NavigationItem[] = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
</script>

<template>
  <div class="flex flex-col h-screen">
    <UiHeader :items="navItems" />
    <div class="flex-1">
      <slot />
    </div>
    <UiFooter />
  </div>
</template>

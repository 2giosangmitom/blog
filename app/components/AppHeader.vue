<script setup lang="ts">
const navItems = [
  { label: "About", to: "/about" },
  { label: "Project", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
</script>

<template>
  <header>
    <div class="container flex justify-between mx-auto">
      <span>Logo here</span>
      <nav class="flex gap-x-8">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>

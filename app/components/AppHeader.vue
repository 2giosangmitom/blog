<script setup lang="ts">
import { SearchIcon, MenuIcon, XIcon } from "@lucide/vue";
import { motion } from "motion-v";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Project", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/#contact" },
];

const mobileMenuOpen = ref(false);

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<template>
  <header class="border-b border-b-muted py-5 relative">
    <div class="container px-2 flex justify-between items-center mx-auto font-mono uppercase">
      <NuxtLink to="/" @click="closeMenu">
        <AppLogo />
      </NuxtLink>

      <nav class="hidden sm:flex sm:gap-x-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm hover:text-accent transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-x-3">
        <button aria-label="Search">
          <SearchIcon class="w-5 h-5" />
        </button>

        <button
          class="sm:hidden"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMenu"
        >
          <XIcon v-if="mobileMenuOpen" class="w-5 h-5" />
          <MenuIcon v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <AnimatePresence>
      <motion.nav
        v-if="mobileMenuOpen"
        :initial="{ opacity: 0, y: -8 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: -8 }"
        :transition="{ duration: 0.2, ease: 'easeOut' }"
        class="sm:hidden absolute top-full left-0 right-0 z-50 bg-neutral-950 border-b border-b-muted px-2 py-4 flex flex-col gap-y-4 font-mono uppercase"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm hover:text-accent transition-colors"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
      </motion.nav>
    </AnimatePresence>
  </header>
</template>

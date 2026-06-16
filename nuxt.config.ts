import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/image",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/a11y",
    "motion-v/nuxt",
    "@vueuse/nuxt",
  ],
  typescript: {
    tsConfig: {
      include: ["content.config.ts"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

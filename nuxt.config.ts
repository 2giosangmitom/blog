// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
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
      include: ["uno.config.ts", "content.config.ts"],
    },
  },
});

import PrimeVue from "primevue/config";
import AnimateOnScroll from "primevue/animateonscroll";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
  });
  nuxtApp.vueApp.directive("animateonscroll", AnimateOnScroll);
});

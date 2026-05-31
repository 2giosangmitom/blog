<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("inline-flex justify-center items-center", {
  variants: {
    variant: {
      solid: "bg-primary-400",
      link: "",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

type ButtonProps = VariantProps<typeof button>;

const props = withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"];
    asChild?: boolean;
  }>(),
  {
    variant: "solid",
  },
);
</script>

<template>
  <UiPrimitive as="button" :as-child="props.asChild" :class="button({ variant })">
    <slot />
  </UiPrimitive>
</template>

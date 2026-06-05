<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-[var(--ui-radius)] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none",
  {
    variants: {
      variant: {
        solid: "bg-primary text-white hover:bg-primary/90",
        outline: "border border-default bg-transparent hover:bg-elevated",
        soft: "bg-primary/10 text-primary hover:bg-primary/20",
        ghost: "hover:bg-elevated",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-4 text-sm",
        lg: "h-10 px-6 text-base",
        xl: "h-11 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

type ButtonProps = VariantProps<typeof button>;

const props = withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    asChild?: boolean;
  }>(),
  {
    variant: "solid",
    size: "md",
  },
);
</script>

<template>
  <UiPrimitive as="button" :as-child="props.asChild" :class="button({ variant, size })">
    <slot />
  </UiPrimitive>
</template>

import { defineConfig, presetWind4, transformerDirectives } from "unocss";
import { theme as tailwindTheme } from "unocss/preset-wind4";

export default defineConfig({
  presets: [presetWind4()],
  transformers: [transformerDirectives()],
  extendTheme: (theme) => {
    theme.colors ??= {};
    theme.colors.primary = tailwindTheme.colors.orange;
    theme.colors.secondary = tailwindTheme.colors.gray;
    theme.colors.success = tailwindTheme.colors.green;
    theme.colors.info = tailwindTheme.colors.blue;
    theme.colors.warning = tailwindTheme.colors.yellow;
    theme.colors.error = tailwindTheme.colors.red;
  },
  shortcuts: {
    // Text colors
    "text-dimmed": "text-$ui-text-dimmed",
    "text-muted": "text-$ui-text-muted",
    "text-toned": "text-$ui-text-toned",
    "text-default": "text-$ui-text",
    "text-highlighted": "text-$ui-text-highlighted",
    "text-inverted": "text-$ui-text-inverted",

    // Background colors
    "bg-default": "bg-$ui-bg",
    "bg-muted": "bg-$ui-bg-muted",
    "bg-elevated": "bg-$ui-bg-elevated",
    "bg-accented": "bg-$ui-bg-accented",
    "bg-inverted": "bg-$ui-bg-inverted",

    // Border colors
    "border-default": "border-$ui-border",
    "border-muted": "border-$ui-border-muted",
    "border-accented": "border-$ui-border-accented",
    "border-inverted": "border-$ui-border-inverted",

    // Primary color shortcuts
    "bg-primary": "bg-$ui-primary",
    "text-primary": "text-$ui-primary",
    "border-primary": "border-$ui-primary",
  },
});

import { defineConfig, presetWind4 } from "unocss";
import { theme as tailwindTheme } from "unocss/preset-wind4";

export default defineConfig({
  presets: [presetWind4()],
  extendTheme: (theme) => {
    theme.colors ??= {};
    theme.colors.primary = tailwindTheme.colors.orange;
  },
});

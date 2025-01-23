import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      backgroundImage: {
        'default': 'url("/assets/gradient.png")',
      }
    }
  },

  plugins: []
} satisfies Config;

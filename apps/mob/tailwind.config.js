// import preset from '@lynx-js/tailwind-preset';
import preset from '@lynx-js/tailwind-preset-canary';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [preset],
};

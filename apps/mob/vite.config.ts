import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { icons } from './public/icons.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'Mahyar',
        short_name: 'Mahyar',
        description: 'نرم افزار بومی مهیار',
        theme_color: '#ffffff',
        id: '/?homescreen=1',
        orientation: 'portrait',
        launch_handler: {
          client_mode: ['navigate-existing', 'auto'],
        },
        icons,
        screenshots: [
          {
            src: '/screenshot1.png',
            sizes: '380x839',
            type: 'image/png',
            form_factor: 'narrow',
          },
        ],
        display: 'fullscreen',
        display_override: ['window-controls-overlay', 'standalone', 'browser'],
        protocol_handlers: [],
        handle_links: 'preferred',
        scope_extensions: [{ origin: '*.qrbni.workers.dev' }],
        categories: ['business', 'utilities', 'education'],
        dir: 'rtl',
        prefer_related_applications: false,
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
    cloudflare(),
  ],
})

import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { icons } from './icons.json'
console.log(process.env.VITE_CLERK_SECRET_KEY)

const dIntl = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' })
const tIntl = new Intl.DateTimeFormat('fa-IR', { hour: 'numeric' })
function getBuildDT() {
  const d = new Date()
  return `${dIntl.format(d)}-${tIntl.format(d)}`.replace(/[:/]/g, '-')
}
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    BUILD_TIME: JSON.stringify(getBuildDT()),
  },
  server: {
    port: 3000,
    proxy: {
      // This will proxy any requests starting with /api to localhost:5000
      '/trpc': {
        target: 'http://localhost:3030', // Replace with your backend server address
        changeOrigin: true, // To change the request origin
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove /api prefix
      },
    },
  },
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

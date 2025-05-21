import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
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
  },
  plugins: [react(), tailwindcss(), cloudflare()],
})

import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import path from "path";

const nextConfigFn = async () => {
  const nextConfig: NextConfig = {
    /* config options here */
  }
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform({
      configPath: path.resolve(process.cwd(), '../../configs/cloudflare/worker.wrangler.jsonc'),
      persist: {
        path: path.resolve(process.cwd(), '../../.wrangler/state/v3'),
      }
    });
  }
  return nextConfig
}


export default nextConfigFn
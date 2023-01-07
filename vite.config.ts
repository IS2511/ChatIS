import cloudflare from "solid-start-cloudflare-pages";
import solid from "solid-start/vite";
import suidPlugin from "@suid/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    suidPlugin(),
    // TODO: Turn on SSR when SUID adds support for it (upstream moment)
    solid({ ssr: false, adapter: cloudflare({})}),
  ],
});

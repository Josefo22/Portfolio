// @ts-check
import { defineConfig } from 'astro/config';
import astroIcon from "astro-icon"; // Asegúrate de importar el paquete
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    // Configuración específica para Vercel
    output: 'static',
    site: 'https://potfolio-web-omega.vercel.app/',
    build: {
        format: 'file',
        // No usar el formato de importación de módulos en el build
        assets: 'assets'
    },
    integrations: [
        astroIcon({
          include: {
            mdi: ["*"], // Incluir todos los íconos de "mdi"
          },
        }),
        tailwind()
    ],
    vite: {
        // No hacer transpilación durante el build (optimización)
        build: {
            // Desactivar la minificación para resolver problemas
            minify: false,
            // Evitar chunks demasiado grandes
            rollupOptions: {
                external: ['react', 'react-dom', 'particles.js', 'gsap'],
                output: {
                    manualChunks: undefined
                }
            }
        },
        // Optimizaciones de SSR
        ssr: {
            noExternal: []
        }
    },
    server: {
        host: true
    }
});

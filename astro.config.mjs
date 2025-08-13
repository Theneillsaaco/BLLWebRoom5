// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://Theneillsaaco.github.io',
    base: '/BLLWebRoom5',

    server:{
        host: true,
        port: 4321,
        allowedHosts: true
    },

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [
        icon({
            include: {
                mdi: ['*']
            }
        })
    ]
});
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            // ESM-safe __dirname replacement
            '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
        },
    },
});

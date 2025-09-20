import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Point Vite at your frontend folder
  root: 'frontend',
  plugins: [react()],
  publicDir: 'public',        // resolves to frontend/public
  build: {
    outDir: 'dist',           // resolves to frontend/dist
    emptyOutDir: true
  },
  server: { port: 5173 },
  preview: { port: 4173 }
});

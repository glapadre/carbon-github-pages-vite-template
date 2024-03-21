import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/{github-username}/{project-repo}/',
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
  server: {
    port: 3030,
  }
});

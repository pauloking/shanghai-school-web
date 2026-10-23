import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor';
          }
          if (id.includes('/src/data/catchments')) {
            return 'catchments-data';
          }
          if (id.includes('/src/data/schools')) {
            return 'schools-data';
          }
          if (id.includes('/src/data/')) {
            return 'policy-data';
          }
        }
      }
    }
  }
});

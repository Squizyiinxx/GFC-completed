
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '../../');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
    minify: 'esbuild',
    outDir: path.resolve(__dirname, 'dist'), 
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          codemirror: ['@uiw/react-codemirror'],
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#challenges': path.resolve(PROJECT_ROOT, 'challenges'),
    }
  },
  server: {
    port: 3000,
    fs: {
      strict: true,
      allow: [
        PROJECT_ROOT,
        path.resolve(PROJECT_ROOT, 'challenges')
      ]
    }
  },
  optimizeDeps: {
    include: [
      'react-syntax-highlighter',
      'react-syntax-highlighter/dist/esm/languages/prism/javascript',
      'react-syntax-highlighter/dist/esm/styles/prism/dark', 
    ],
  },
})

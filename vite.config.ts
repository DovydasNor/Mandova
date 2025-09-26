import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Bun-specific optimizations
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev starts with Bun
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-i18next',
      'i18next'
    ],
    exclude: ['ogl'], // Exclude heavy 3D library from pre-bundling
  },
  
  // Performance optimizations
  build: {
    // Enable rollup optimizations
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['react-i18next'],
          gallery: ['ogl'], // Gallery-specific heavy library
        },
      },
    },
    // Increase chunk size warning limit for heavy gallery components
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: true,
    // Enable source maps for debugging (can disable in production)
    sourcemap: false,
  },
  
  // Asset optimization
  assetsInclude: ['**/*.webp', '**/*.svg'],
})

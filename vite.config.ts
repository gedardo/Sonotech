import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin personalizado para copiar archivos de assets
    {
      name: 'copy-assets',
      writeBundle() {
        const srcAssetsDir = resolve(__dirname, 'src/assets');
        const distAssetsDir = resolve(__dirname, 'dist/assets');
        
        // Crear directorio de assets en dist si no existe
        if (!existsSync(distAssetsDir)) {
          mkdirSync(distAssetsDir, { recursive: true });
        }
        
        // Lista de archivos a copiar
        const filesToCopy = [
          '2morado png.png',
          'blanco png.png', 
          'morado png.png',
          'negro png.png',
          'QR.png',
          'Video.mp4',
          'botsonido.webp'
        ];
        
        // Copiar archivo de manifiesto desde public
        const publicDir = resolve(__dirname, 'public');
        const manifestSrc = resolve(publicDir, 'manifest.webmanifest');
        const manifestDist = resolve(__dirname, 'dist/manifest.webmanifest');
        
        try {
          if (existsSync(manifestSrc)) {
            copyFileSync(manifestSrc, manifestDist);
            console.log('Copiado: manifest.webmanifest');
          }
        } catch (error) {
          console.error('Error copiando manifest.webmanifest:', error);
        }
        
        // Copiar cada archivo
        filesToCopy.forEach(file => {
          const srcPath = resolve(srcAssetsDir, file);
          const distPath = resolve(distAssetsDir, file);
          
          try {
            if (existsSync(srcPath)) {
              copyFileSync(srcPath, distPath);
              console.log(`Copiado: ${file}`);
            } else {
              console.warn(`Archivo no encontrado: ${file}`);
            }
          } catch (error) {
            console.error(`Error copiando ${file}:`, error);
          }
        });
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInclude: ['**/*.mp4', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
  }
});

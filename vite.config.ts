import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.tsx', 'src/**/*.ts', 'src/*.ts', 'src/*.tsx'],
    }),
  ],
  clearScreen: false,
  envPrefix: ['VITE_'],
});

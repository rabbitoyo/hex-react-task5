import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    base: import.meta.env.NODE_ENV === 'production' ? '/hex-react-task5/' : '/',
    plugins: [react()],
});

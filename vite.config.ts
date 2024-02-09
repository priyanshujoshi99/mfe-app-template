import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log('mode :: ' + mode);

  return defineConfig({
    base: '/mfe-app',
    plugins: [
      react(),
      federation({
        name: 'mfeApp',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './App': './src/App.tsx',
          './AppStore': './src/app/storeProvider.tsx'
        },
        shared: [
          'react',
          'react-dom',
          'react-router-dom',
          'react-redux',
          '@reduxjs/toolkit'
        ]
      })
    ],
    server: {
      port: 5991,
      strictPort: true
    },
    preview: {
      port: 5991,
      strictPort: true
    },
    build: {
      outDir: 'build',
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      sourcemap: env.VITE_SOURCE_MAP === 'true' || false
    }
  });
};

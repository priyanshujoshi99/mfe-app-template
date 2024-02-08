import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log('mode :: ' + mode);
  console.log(
    `mode :: ${mode} \n hub url :: ${env.VITE_REACT_APP_NFS_HUB_URL}`
  );

  return defineConfig({
    base: '/promising-engine-mfe',
    plugins: [
      react(),
      federation({
        name: 'promisingEngine',
        filename: 'remoteEntry.js',
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
      port: 5432,
      strictPort: true
    },
    preview: {
      port: 5432,
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

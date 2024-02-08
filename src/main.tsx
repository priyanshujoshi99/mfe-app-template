import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import AppStoreProvider from './app/storeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <Suspense fallback={<>Loading....</>}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </AppStoreProvider>
  </React.StrictMode>
);

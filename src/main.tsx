import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import AppStoreProvider from './app/storeProvider';

const Main = () => {
  return (
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
};

export default Main;

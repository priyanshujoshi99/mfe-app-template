import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ReactRouterGlobalNavigation } from './helpers/ReactRouterGlobalNavigation';
import UrlContextProvider from './helpers/UrlContext';
import { URL_PATHS } from './helpers/constants';
import { redirectToLoginPage } from './helpers/generic';
import { RouteUpdater } from './helpers/interface/IApp';
// import { getSession } from './helpers/localStorageHelper';

const WelcomeScreen = lazy(() => import('./screens/WelcomeScreen'));

const { WELCOME_SCREEN } = URL_PATHS;

const App = ({
  routeUpdater = null,
  insideRouter = false
}: {
  routeUpdater?: RouteUpdater | null;
  insideRouter?: boolean;
}) => {
  const { location } = window;
  const pathParts = location.hash.split('/');
  const prefix = insideRouter ? `/${pathParts[1]}` : '';

  const getWrapperContext = (children: React.JSX.Element) => {
    return (
      <UrlContextProvider urlPrefix={prefix}>{children}</UrlContextProvider>
    );
  };

  const defaultRoutes = [
    {
      path: WELCOME_SCREEN,
      element: getWrapperContext(<WelcomeScreen />)
    }
  ];

  useEffect(() => {
    if (routeUpdater) {
      routeUpdater(defaultRoutes);
    }
  }, []);

  const getRouterDetails = () => {
    if (
      !insideRouter
      // && !getSession()
    ) {
      redirectToLoginPage();
    } else {
      return (
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={
                  insideRouter
                    ? `/${pathParts[1]}${WELCOME_SCREEN}`
                    : WELCOME_SCREEN
                }
                replace={true}
              />
            }
          />
          {defaultRoutes.map((router) => (
            <Route
              path={router.path}
              element={router.element}
              key={router.path}
            />
          ))}
        </Routes>
      );
    }
  };

  return (
    <>
      {getRouterDetails()}
      <ReactRouterGlobalNavigation />
    </>
  );
};

export default App;

import { createContext } from 'react';

export const UrlContext = createContext<any>({});

const UrlContextProvider = (props: any) => {
  const { children } = props;
  return <UrlContext.Provider value={props}>{children}</UrlContext.Provider>;
};
export default UrlContextProvider;

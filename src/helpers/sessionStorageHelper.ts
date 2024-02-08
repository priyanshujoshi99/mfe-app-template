import { getReactAppAccessTkn } from './metaHelper';

const SESSION_ID = 'SESSION_ID'; // update the session token here

const deleteSession = (key: string) => {
  sessionStorage.removeItem(key);
};

// const getSessionItem = (key: string) => {
//   const item = sessionStorage.getItem(key);
//   if (item !== null) {
//     return JSON.parse(item);
//   }
//   return null;
// };

export const getSession = () => {
  const sessionData = sessionStorage.getItem(SESSION_ID);

  let session: Record<string, string> | null = null;

  if (sessionData) {
    try {
      session = JSON.parse(sessionData);
    } catch (error) {
      console.error('Error parsing session data:', error);
    }
  }

  return session;
};

export const isUserAuthorizationAvailable = () => {
  const authDetail = getSession();
  return !!authDetail;
};

export const getLogoutPath = () => {
  const authDetail = getSession();
  return !!authDetail ? authDetail.logoutPath : '/auth/logout';
};

export const getName = () => {
  const authDetail = getSession();
  return !!authDetail ? authDetail.name : 'User';
};

export const destroySession = () => deleteSession(SESSION_ID);

export const getAccessToken = () => {
  const authDetail = getSession();
  return !!authDetail ? authDetail.accessToken : getReactAppAccessTkn();
};

// const saveSession = (key: string, value: string) => {
//   sessionStorage.setItem(key, value);
// };

export const getUserName = () => {
  const authDetail = getSession();
  return !!authDetail ? authDetail.name : 'Unknown User';
};

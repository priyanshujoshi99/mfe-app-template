import { jwtDecode } from 'jwt-decode';
import { isNil } from 'ramda';
import getNavigation from './ReactRouterGlobalNavigation';
import { baseApiUrl, getTenantId, hostName } from './metaHelper';
import { getAccessToken } from './sessionStorageHelper';

export const getBaseApiUrl = () => baseApiUrl() || '';

export const getHostName = () => hostName() || document.location.origin;

export const getLoginPath = (): string => `${getHostName()}/auth/login`;

export const redirectToLoginPage = () => {
  window.location.href = getLoginPath();
};

export const gotoPage = (path: string, state: object = {}) => {
  getNavigation()(path, { state });
};

export const goBackToPreviousPage = () => {
  getNavigation()(-1);
};

export const getOrgId = () => {
  const accessToken = getAccessToken();
  if (!isNil(accessToken)) {
    const tokenInfo: { TID: string } = jwtDecode(accessToken, { header: true });
    return tokenInfo.TID;
  }
  return getTenantId() ?? '';
};

export const isLocalEnv = () => {
  if (
    typeof window !== 'undefined' &&
    window.location.hostname === 'localhost'
  ) {
    return true; // Local environment
  } else {
    return false; // Anything else (production, dev, etc.)
  }
};

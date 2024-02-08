export const baseApiUrl = () => import.meta.env.VITE_BASE_API_URL;

export const hostName = () => import.meta.env.VITE_HOST_NAME;

export const apiKey = () => import.meta.env.VITE_API_KEY;

export const getBaseApiUrls = () => import.meta.env.BASE_API_URLS;

export const getReactAppAccessTkn = () =>
  import.meta.env.REACT_APP_ACCESS_TOKEN;

export const getNotificationRefreshInterval = () =>
  import.meta.env.VITE_NOTIFICATIONS_REFRESH_INTERVAL;

export const getTenantId = () => import.meta.env.VITE_TENANT_ID;

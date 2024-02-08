import { getSession } from '../helpers/sessionStorageHelper';

export const API = 'API';
export const API_START = 'API_START';
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_END = 'API_END';
export const ACCESS_DENIED = 'ACCESS_DENIED';
export const API_ERROR = 'API_ERROR';

export const apiSuccess = ({
  response,
  feature,
  meta
}: {
  response?: object | object[] | undefined;
  feature?: string | undefined;
  meta?: object | object[] | undefined;
}) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta
});

export const apiError = ({
  response,
  feature,
  meta
}: {
  error?: unknown;
  response?: object | object[] | undefined;
  feature?: string | undefined;
  meta?: object | object[] | undefined;
}) => ({
  type: `${feature} ${API_ERROR}`,
  payload: response,
  feature,
  meta
});

const getAuthorisationHeader = () =>
  getSession() ? { Authorization: getSession() } : {};

// only in dev env
const getApiKey = () =>
  import.meta.env.API_KEY
    ? {
        api_key: import.meta.env.API_KEY
      }
    : {};

const genericHeaders = () => ({
  'Content-Type': 'application/json',
  ...getAuthorisationHeader(),
  ...getApiKey()
});

export const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  feature = '<>',
  headers = {},
  responseType = 'json',
  meta = {}
}: {
  url?: string | undefined;
  method?: string | undefined;
  data?: any;
  feature?: string | undefined;
  headers?: object | undefined;
  responseType?: string | undefined;
  meta?: object | undefined;
}) => {
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: {
      url,
      method,
      data,
      feature,
      meta,
      responseType,
      headers: { ...genericHeaders(), ...headers }
    }
  };
};

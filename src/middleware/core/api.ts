import axios, { AxiosRequestConfig } from 'axios';
import { Middleware } from 'redux';
import { API_REQUEST, apiError, apiSuccess } from '../../dux/api';
import { isLocalEnv, redirectToLoginPage } from '../../helpers/generic';

const apiMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action: any) => {
    next(action);

    if (!(action.type as string).includes(API_REQUEST)) return;

    const { url, method, data, headers, feature, meta, responseType } =
      action.payload;

    const dataOrParams = ['GET'].includes(method) ? 'params' : 'data';

    // axios default configs
    axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL || '';

    axios
      .request({
        url,
        method,
        headers,
        responseType,
        [dataOrParams]: data
      } as AxiosRequestConfig)
      .then(({ data }) => {
        dispatch(
          apiSuccess({
            response: data,
            feature,
            meta
          })
        );
      })
      .catch((error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
          if (!isLocalEnv()) {
            redirectToLoginPage();
          }
        } else {
          dispatch(
            apiError({
              error,
              response: error.response,
              feature,
              meta
            })
          );
        }
      });
  };

export default apiMiddleware;

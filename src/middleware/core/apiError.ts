import { message } from 'antd';
import { Middleware } from 'redux';
import { API_ERROR } from '../../dux/api';
import { errorMessages } from '../../helpers/constants';

const apiErrorMiddleware: Middleware = () => (next) => (action: any) => {
  if (action.type.endsWith(API_ERROR)) {
    const content =
      action.payload?.data?.message ??
      (errorMessages[action.type] || 'There is an error!');

    message.error({ content });
  }

  next(action);
};

export default apiErrorMiddleware;

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // handle requests
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    // handle succes 
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    // handle errors
  }
  return Promise.reject({ ...error });
};
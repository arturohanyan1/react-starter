import axios from 'axios';
import packageJson from 'src/../package.json';
import { getQueryString } from 'src/utils/apiHelpers';
import { getBaseUrl } from 'src/utils/helpers';

// eslint-disable-next-line no-console
const headers = { 'content-type': 'application/json', 'access-control-allow-origin': '*' };
export const instance = axios.create({});

const onFulfilled = (response: any): any => response?.data;

const setHeaders = (needToken: boolean): void => {
  const token = JSON.parse(localStorage.getItem('user') as string)?.token || '';

  if (token && needToken) {
    instance.defaults.headers['x-access-token'] = token;
  } else {
    delete instance.defaults.headers['x-access-token'];
  }
};

instance.interceptors.response.use(
  (response) => response,
  (e) => {
    // checking strapi issues
    if (e?.response?.config?.url.includes('strapi4')) return;
    return e.response;
  }
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

export const HttpClient = {
  get: async (
    url: { path: string; baseURL: string } | string,
    needToken = true,
    params?: Record<string, any>,
    config?: any
  ) => {
    const joinQueryArrayValues = params ? getQueryString(params, config?.joinQueryArrayValues) : null;
    let path = getBaseUrl(url, params, joinQueryArrayValues);
    path = path.includes('?')
      ? path + `&appVersion=${packageJson.version}`
      : path + `?appVersion=${packageJson.version}`;
    setHeaders(needToken);

    return await instance.get(path, { ...config, ...headers }).then(onFulfilled);
  },
  post: async (
    url: { path: string; baseURL: string } | string,
    data?: any,
    needToken = true,
    params?: Record<string, any>,
    config?: any
  ): Promise<any> => {
    const joinQueryArrayValues = params ? getQueryString(params, config?.joinQueryArrayValues) : null;
    const path = getBaseUrl(url, params, joinQueryArrayValues);
    setHeaders(needToken);

    return await instance.post(path, data, { ...config }).then(onFulfilled);
  },
  patch: async (
    url: { path: string; baseURL: string } | string,
    data?: any,
    params?: Record<string, any>,
    config?: any,
    needToken = true
  ): Promise<any> => {
    const joinQueryArrayValues = params ? getQueryString(params, config?.joinQueryArrayValues) : null;
    const path = getBaseUrl(url, params, joinQueryArrayValues);
    setHeaders(needToken);

    return await instance.patch(path, data, { ...config }).then(onFulfilled);
  },
};

export default HttpClient;

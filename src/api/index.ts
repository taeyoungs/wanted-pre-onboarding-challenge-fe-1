import axios, { AxiosRequestConfig } from 'axios';
import { TOKEN } from 'constants';

const defaultRequestConfiguration: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080',
  responseType: 'json',
};

const initialization = (config: AxiosRequestConfig) => {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use((existedConfig) => {
    const token = localStorage.getItem(TOKEN);
    const newConfig = existedConfig;

    if (token) {
      newConfig.headers = { Authorization: token };
    }

    return newConfig;
  });

  return axiosInstance;
};

export const axiosInstance = initialization(defaultRequestConfiguration);

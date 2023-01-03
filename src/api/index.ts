import axios, { AxiosRequestConfig } from 'axios';

const defaultRequestConfiguration: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080',
  responseType: 'json',
};

export const axiosInstance = axios.create(defaultRequestConfiguration);

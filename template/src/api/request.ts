import axios, {AxiosRequestConfig} from 'axios';
import {call, select} from 'redux-saga/effects';

import {config} from './../config';
import {tokenSelector} from '../models/user/selectors';

export const request = <T>(
  options: AxiosRequestConfig,
  token?: string | null,
) => {
  const headers = {...options?.headers};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.request<T>({
    ...options,
    headers,
    baseURL: config.API_URL,
  });
};

export interface AuthenticatedRequestParams {
  token: string;
  options: AxiosRequestConfig;
}

export const authenticatedRequest = function* <T>(
  options: AxiosRequestConfig & {token?: string},
) {
  try {
    const token_: string | null = yield select(tokenSelector);

    const response: T = yield call(request, options, options.token || token_);
    return response;
  } catch (err: any) {
    throw err;
  }
};

export const externalRequest = function* <T>(
  externalUrl: string,
  opts: AxiosRequestConfig,
) {
  const response: T = yield call(request, {url: externalUrl, ...opts});

  return response;
};

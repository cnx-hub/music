import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface NXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responsetInterceptor?: (config: T) => T
  responseInterceptorCatch?: (err: any) => any
}

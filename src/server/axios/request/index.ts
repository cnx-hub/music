import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { NXRequestConfig } from './type'

class NXrequest {
  instance: AxiosInstance
  interceptors: NXRequestConfig

  constructor(config: NXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config

    this.instance.interceptors.request.use(
      config.requestInterceptor,
      config.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      config.responsetInterceptor,
      config.responseInterceptorCatch
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败,错误信息')
        } else {
          return data
        }
      },
      (err) => {
        // 判断请求  显示不同的错误信息
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权的访问'
              break
            default:
              err.message = '其他错误信息'
          }
        }
        return err
      }
    )
  }

  request<T = any>(config: NXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求  单独做拦截
      if (config?.requestInterceptor) {
        config = config.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个响应 响应做拦截
          if (config?.responsetInterceptor) {
            res = config.responsetInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          console.log(config)
          reject(err)
        })
    })
  }

  get<T>(config: NXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: NXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: NXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: NXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default NXrequest

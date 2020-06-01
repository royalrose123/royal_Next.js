import isPlainObject from 'lodash/fp/isPlainObject'
import { startFind } from '@/utils/start-find'
import handleParameter from './handleParameter'

export default function getRequestConfig(apiInfo) {
  const { params, data, ...restConfig } = apiInfo.config
  const requestConfig = restConfig

  const handleConfigWithParams = () => {
    if (!isPlainObject(params)) return

    requestConfig.params = handleParameter(params, apiInfo)
  }

  const handleConfigWithData = () => {
    if (!isPlainObject(data)) return

    requestConfig.data = handleParameter(data, apiInfo)
  }

  const handleConfigWithFormData = () => {
    if (!requestConfig.headers) return

    const data = new FormData()

    Object.entries(requestConfig.data).forEach(([key, value]) => {
      Array.isArray(value) ? value.forEach(value => data.append(key, value)) : data.append(key, value)
    })

    requestConfig.data = data
  }

  const setRequestConfig = startFind(handleConfigWithParams)
    .next(handleConfigWithData)
    .end(handleConfigWithFormData)

  setRequestConfig()

  return requestConfig
}

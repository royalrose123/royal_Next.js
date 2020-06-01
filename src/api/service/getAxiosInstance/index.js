import axios from 'axios'
import authConfig from '@/authConfig'

export default function getAxiosInstance(apiInfo) {
  const withAccessTokenHeader = {
    headers: { Authorization: `bearer ${authConfig.getAccessToken()}` },
  }

  const apiConfig = {
    baseURL: getApiUrl(),
    ...(apiInfo.withAccessToken && withAccessTokenHeader),
  }

  return axios.create(apiConfig)
}

const getApiUrl = () => {
  switch (process.env.ENV_KEY) {
    case 'dev':
      return process.env.API_DEV_URL
    case 'sit':
      return process.env.API_SIT_URL
    case 'uat':
      return process.env.API_UAT_URL

    default:
      break
  }
}

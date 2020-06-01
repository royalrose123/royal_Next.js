import Cookies from 'js-cookie'

const auth = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',

  removeAccessToken() {},

  getAccessToken() {
    return Cookies.get('token')
  },

  logOut() {
    this.removeAccessToken()
    window.location.reload()
  },

  isAuthenticated() {
    const accessToken = this.getAccessToken()

    return typeof accessToken === 'string' && accessToken.length > 0
  },
}

export default auth

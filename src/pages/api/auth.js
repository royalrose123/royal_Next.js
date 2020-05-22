import axios from 'axios'
import cookie from 'cookie'

export default function auth(req, res) {
  return new Promise((resolve, reject) => {
    const { body } = req
    const { username, password } = body

    axios({
      method: 'post',
      baseURL: `http://127.0.0.1:8000/api`,
      url: '/user/login',
      data: { username, password },
      withCredentials: true,
    })
      .then((result) => {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('auth', result.data.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
          }),
        )

        res.json({ message: 'OK', statusCode: '0000' })
      })
      .catch((err) => {
        res.json({ message: err, statusCode: '9999' })
      })
  })
}

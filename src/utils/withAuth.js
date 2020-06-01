import { verify } from 'jsonwebtoken'

export const withAuth = (fn) => async (req, res) => {
  verify(req.cookies.token, 'secret', async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res)
    }

    res.status(401).json({ message: 'Sorry you are not authenticated!' })
  })
}

import { verify } from 'jsonwebtoken'

export const withAuth = (fn) => async (req, res) => {
  verify(req.cookies.auth, 'secret', async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res)
    }

    res.status(401).json({ message: 'Sorrty you are not authenticated!' })
  })
}

// import { compare } from 'bcrypt'
import cookie from 'cookie'
import { sign } from 'jsonwebtoken'

const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

export default async function login(req, res) {
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  })

  if (req.method === 'POST') {
    const person = await db.get('select * from person where email = ?', [req.body.email])

    if (req.body.password === person.password) {
      const personData = { name: person.name, email: person.email }
      const jwt = sign(personData, 'secret', { expiresIn: '1h' })

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600,
          path: '/',
        }),
      )
      res.json({ message: 'OK', statusCode: '0000' })
    } else {
      res.json({ message: 'Something wrong!', statusCode: '9999' })
    }
  }
}

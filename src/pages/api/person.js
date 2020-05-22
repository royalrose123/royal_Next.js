import { withAuth } from '@/utils/withAuth'
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

export const getPeople = async (req, res) => {
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  })

  const people = await db.all('select * from person')

  res.json(people)
}

export default withAuth(getPeople)

// import { withAuth } from '@/utils/withAuth'
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

export const getAnimal = async (req, res) => {
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  })

  const animal = await db.all('select * from animal')

  res.json(animal)
}

export default getAnimal

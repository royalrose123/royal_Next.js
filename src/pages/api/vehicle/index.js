const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

export const getVehicle = async (req, res) => {
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  })

  const vehicle = await db.all('select * from Vehicle')

  res.json(vehicle)
}

export default getVehicle

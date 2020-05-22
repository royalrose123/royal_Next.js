import { withAuth } from '@/utils/withAuth'
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

export const getVehicleItem = async (req, res) => {
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  })

  const vehicle = await db.get('select * from vehicle where id = ?', [req.query.id])

  res.json(vehicle)
}

export default withAuth(getVehicleItem)

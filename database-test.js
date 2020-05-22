;(async () => {
  const sqlite = require('sqlite')
  const sqlite3 = require('sqlite3')

  // open the database
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  })

  await db.migrate({
    force: true,
  })
})()

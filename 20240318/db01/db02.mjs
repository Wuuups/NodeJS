import mysql from "mysql2/promise"

const connection = await mysql.createConnection({
   host: '127.0.0.1',
   port: 3306,
   user: 'sam',
   password: '12345',
   database: 'nodejs'
})

export default connection

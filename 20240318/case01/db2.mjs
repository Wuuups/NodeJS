import mysql from "mysql2/promise" //使用異步的方式與 MySQL 數據庫進行交互

const connection = await mysql.createConnection({
   host: '127.0.0.1',
   port: 3306,
   user: 'sam',
   password: '12345',
   database: 'nodejs'
})

export default connection

import mysql from "mysql2"



const connection = mysql.createConnection({
   host: '127.0.0.1',
   port: 3306,
   user: 'sam',
   password: '12345',
   database: 'nodejs'
});

connection.query(
   'SELECT * FROM `sort`',
   (err, results, fields) => {
      console.log(err);
      console.log(results);
      console.log(fields);
   }
)
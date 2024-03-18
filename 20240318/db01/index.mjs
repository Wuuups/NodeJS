import connection from "./db01.mjs"

let id =4
let data
connection.query(
   'SELECT * FROM `sort` WHERE `id` = ?',[id],
   (error, result, fields) => {
      if(error){
         console.log(error);
         return false
      }
      // console.log(result)
      data = result
      // console.log(fields)
   }
)

console.log(data);

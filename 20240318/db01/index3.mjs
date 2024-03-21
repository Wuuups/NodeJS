import connection from "./db02.mjs"

let sql = 'SELECT * FROM `sort` WHERE `id` = ?'
let ary = [2]
let [result] = await connection.execute(sql, ary).than(result=> result[0])
console.log(result)
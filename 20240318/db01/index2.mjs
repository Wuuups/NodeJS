import connection from "./db.mjs"

let id = 14
let data
(async () => {
   // data = await getData('SELECT * FROM `sort` WHERE `id` = ?', [id])
   data = await getData( //在匿名函式中調用getData
      'SELECT * FROM `sort` WHERE `id` = ?',
      [id]).then((result) => {
         return result[0]
      }).catch(error => {
         console.log(error)
         return undefined
      })
   console.log(data)
   if(!data){
      //有資料時要執行的動作
   }else{
      //無法取得資料時執行的動作
   }
})()


function getData(SQL, ary) {
   return new Promise((resolve, reject) => {
      connection.execute(
         SQL,
         ary,
         (error, result, fields) => {
            if (error) {
               reject(error)
            }
            // console.log(result)
            data = result
            // console.log(fields)
         }
      )
   })
}

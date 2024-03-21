import connection from "./db02.mjs"

let id = 14
let data
(async () => {
   // data = await getData('SELECT * FROM `sort` WHERE `id` = ?', [id])
   data = await getData( //在匿名函式中調用getData
      'SELECT * FROM `sort` WHERE `id` = ?',
      [id]).then((result) => {
         return result[0] //回傳查詢結果
      }).catch(error => { //在 await 後面使用 .then() 和 .catch() 來處理 Promise 的解析值和拒絕原因
         console.log(error)
         return undefined
      })
   console.log(data)
   if(!data){
      //有資料時要執行的動作
   }else{
      //無法取得資料時執行的動作
   }
})() //立即執行函式


function getData(SQL, ary) {
   return new Promise((resolve, reject) => {
      connection.execute(
         SQL,
         ary,
         (error, result, fields) => {
            if (error) {
               reject(error)
            }
            console.log(result)
            data = result
            console.log(fields)
         }
      )
   })
}

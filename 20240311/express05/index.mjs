import express from "express"
import jsonData from "./singers.json" assert {type: "json"} // Node.js 的 import 語法的一個擴展，用於確認導入的檔案類型
const { singers } = jsonData //singer 是 JSON 檔案中的一個鍵, 從 jsonData 中取出 singers 鍵所對應的值
console.log(singers);

const app = express()

app.get("/", (req, res) => {
   res.send("Home page")
})

//http://localhost:3000/singer/3.html

app.get("/singer/:id.html", (req, res) => {
   const { id } = req.params //取得URL中動態部分的值, 可以在後續的處理邏輯中使用這個 id 變數

   let result = singers.find((singer) => {
      if (singer.id === parseInt(id)) { //id 參數的值是作為字串傳遞的, 需要確保進行比較的資料類型是一致的
         return true
      }
   })
   // res.send(`id = ${req.params.id}`)
   // res.json(result)
   if (result) {
      res.send
         (
         `<!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${result.singer_name}</title>
         </head>
         <body>
            <h1>${result.singer_name}</h1>
            <img src=${result.singer_img} alt="">
         </body>
         </html>
         `)
   } else {
      res.send("NOT EXIST")
   }
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
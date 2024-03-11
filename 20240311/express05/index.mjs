import express from "express"
import jsonData from "./singers.json" assert {type: "json"} //物件
const { singers } = jsonData
console.log(singers);

const app = express()

app.get("/", (req, res) => {
   res.send("Home page")
})

//http://localhost:3000/singer/3.html

app.get("/singer/:id.html", (req, res) => {
   const { id } = req.params

   let result = singers.find((singer) => {
      if (singer.id === parseInt(id)) {
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
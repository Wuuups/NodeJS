import express from "express"
import { resolve } from "path"
import jsonData from "./singers.json" assert {type: "json"} //物件
const { singers } = jsonData
console.log(singers)

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
      res.status(200).send
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
      // res.statusCode =404

      //express'function
      // res.status(404)
      // res.set("fin")
      // res.send("NOT EXIST")

      //in one line
      res.status(404).set("Bruh").send("<h1> ; ( </h1>")
   }
})

app.get("/api/singer/:id", (req, res) => {
   const { id } = req.params

   let result = singers.find((singer) => {
      if (singer.id === parseInt(id)) {
         return true
      }
   })
   if (result) {
      res.status(200).json(result)
   } else {
      res.status(404).json({ err: "not found" })
   }
})

app.get("/netflix", (req, res) => {
   res.redirect("https://www.netflix.com/tw/")
})

app.get("/download", (req, res) => {
   res.download(resolve(import.meta.dirname, "singers.json"))
})

app.get("/content", (req, res) => {
   res.sendFile(resolve("test.html"))
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
import express from "express"
import moment from "moment"
import fs from "fs"
import { resolve } from "path"
const __dirname = import.meta.dirname

const app = express()

const writeToLog = (req, res, next) => { //路由規則
   const { ip, path } = req
   const accessDate = moment().format("YYYY-MM-DDTHH:mm:ss")
   const accessLog = `${accessDate} ${ip} ${path} \r\n`
   fs.appendFile(resolve(__dirname, "access.log"), accessLog, (err) => {
      if (err) {
         console.log(`fail ${err}`)
      }
   })
   next() //執行完後下一個
}

const errToLog = (req, res, next) => { //路由規則
   const { ip, path } = req
   const accessDate = moment().format("YYYY-MM-DDTHH:mm:ss")
   const accessLog = `${accessDate} ${ip} ${path} \r\n`
   fs.appendFile(resolve(__dirname, "error.log"), accessLog, (err) => {
      if (err) {
         console.log(`fail ${err}`)
      }
   })
   next()
}

const checkLogin = (req, res) => {
   if (req.query.code === "464") {
      next()
   } else {
      res.send("Please sign in")
   }
}

app.use(writeToLog)

app.get("/", (req, res) => {
   res.send("Home Page")
})

app.get("/login", (req, res) => {
   res.send("Login")
})

app.get("/about", (req, res) => {
   res.send("About")
})

app.get("/admin", checkLogin, (req, res) => {
   res.send("Backstage")
})

app.get("/setting", checkLogin, (req, res) => {
   res.send("Setting")
})

app.all("*", errToLog, (req, res) => {
   res.send("<h1>;(</h1>")
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
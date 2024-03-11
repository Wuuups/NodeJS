import express from "express"
import moment from "moment"
import fs from "fs"
import path from "path"
// const __dirname = import.meta.dirname

const app = express()

app.get("/", (req, res) => {
   const {ip, path} = req
   console.log(moment().format("YYYY-MM-DDTHH:mm:ss"));
   console.log(ip);
   console.log(path);
   const accessLog = ``
   // fs.appendFile(path.resolve(__dirname, "access.log"), )
   res.send("Home Page")
})
   


app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
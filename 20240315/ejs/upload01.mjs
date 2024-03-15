import express from "express"
import {resolve, extname} from "path"
import multer from "multer"
import { renameSync } from "fs"
import { rename } from "fs/promises"
const __dirname = import.meta.dirname
const app = express()

app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views"))

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))
app.use("/jq", express.static(resolve(__dirname, "node_modules/jquery/dist")))
app.use(express.static(resolve(__dirname, "public")))

const upload = multer({dest: resolve(__dirname, "public", "uploads")})

app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/form", (req, res) => {
    res.render("form01")
})

app.get("/form2", (req, res) => {
    res.render("form02")
})

app.get("/form2_2", (req, res) => {
    res.render("form02_2")
})

app.post("/upload01", upload.single("myFile"), (req, res) => {
    // res.send("處理檔案上傳")
    let timestamp = Date.now();
    // new Date().getTime() 瀏覽器的 JS 的 timestamp 寫法
    let newName = `${timestamp}${extname(req.file.originalname)}`
    renameSync(req.file.path, resolve(__dirname, "public", "uploads", newName))
    req.body.myFile = newName
    res.json({body: req.body})
})

app.post("/upload02", upload.array("myFile", 3) ,(req, res) =>{
    let myFiles = [];

    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`
        myFiles.push(newName)
        rename(file.path, resolve(__dirname, "public", "uploads", newName))
    })
    req.body.myFiles = myFiles

    res.json({body: req.body})
})

app.post("/upload02_2", upload.array("myFile[]", 3) ,(req, res) =>{
    let myFiles = [];

    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`
        myFiles.push(newName)
        rename(file.path, resolve(__dirname, "public", "uploads", newName))
    })
    req.body.myFiles = myFiles

    res.json({body: req.body})
})

app.listen(3000, () => {
    console.log("服務已啟動於 http://localhost:3000")
})
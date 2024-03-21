import express from "express"
import {resolve, extname} from "path"
import multer from "multer"
import { renameSync } from "fs"
import { rename } from "fs/promises"
import {uuid} from "uuidv4"
const __dirname = import.meta.dirname
const app = express()

app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views"))

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))
app.use("/jq", express.static(resolve(__dirname, "node_modules/jquery/dist")))
app.use(express.static(resolve(__dirname, "public")))

const storage = multer.diskStorage({ // Multer 中的一個方法，用於配置 Multer 如何處理文件的存儲
    destination: function(req, file, cb){ // 用於指定文件的存儲目錄
        cb(null, resolve(__dirname, "public", "uploads"))
    },
    filename: function(req, file, cb){ // 用於指定文件的新名稱
        // timestamp 做為新檔名
        // let timestamp = Date.now();
        // let newName = `${timestamp}${extname(file.originalname)}`

        // uuid 做為新檔名
        let newName = `${uuid()}${extname(file.originalname)}`

        if(!req.body[file.fieldname]){
            req.body[file.fieldname] = []
        }
        req.body[file.fieldname].push(newName)
        cb(null, newName)
    }
})

const upload = multer({storage}) //將建立的 storage 對象作為配置參數傳遞給它

app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/form1", (req, res) => {
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
    res.json({body: req.body, file: req.file})
})

app.post("/upload02", upload.array("myFile", 3) ,(req, res) =>{
    // let myFiles = [];

    // req.files.forEach(file => {
    //     let newName = `${file.filename}${extname(file.originalname)}`
    //     myFiles.push(newName)
    //     rename(file.path, resolve(__dirname, "public", "uploads", newName))
    // })
    // req.body.myFiles = myFiles

    res.json({body: req.body, file: req.files})
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
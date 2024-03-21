import express from "express"
import {resolve, extname} from "path"
import multer from "multer" // 用於處理表單的文件上傳
import { renameSync } from "fs"
import { rename } from "fs/promises"
const __dirname = import.meta.dirname
const app = express()

app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views")) //導到views資料夾

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))
app.use("/jq", express.static(resolve(__dirname, "node_modules/jquery/dist")))
app.use(express.static(resolve(__dirname, "public")))

const upload = multer({dest: resolve(__dirname, "public", "uploads")}) //這段程式碼的作用是告訴 Multer 中間件，當用戶上傳文件(post)時，將文件保存到指定的目錄中。dest: 一個用於設置文件上傳目標目錄的選項

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

app.post("/upload01", upload.single("myFile"), (req, res) => { //使用multer中漸漸解析上傳的表單數據並限制表單中檔案上傳(myFile)數量為一個
    let timestamp = Date.now();
    // new Date().getTime() 瀏覽器的 JS 的 timestamp 寫法

    let newName = `${timestamp}${extname(req.file.originalname)}`

    renameSync(req.file.path, resolve(__dirname, "public", "uploads", newName)) // 使用 renameSync 方法將上傳的文件移動到指定的目錄中，並在reslove方法中組合為新的路徑並在最後的參數以新的文件名命名

   req.body.myFile = newName // req.body中增加一個名為myFile的鍵並以重新命名的檔案名稱作為值
   

    res.json({body: req.body, file: req.file})
    // 文件類型會貯存在req.file中
})

app.post("/upload02", upload.array("myFiles", 3) ,(req, res) =>{
   
   let myFiles = [] //初始化了一個空數組 myFiles 來保存上傳的文件的新名稱

    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`

        myFiles.push(newName) // 每個上傳文件的新文件名添加到名為 myFiles 的陣列

        rename(file.path, resolve(__dirname, "public", "uploads", newName))
    })
    req.body.myFiles = myFiles

    res.json({body: req.body})
})

app.post("/upload02_2", upload.array("myFile[]", 3) ,(req, res) =>{ //將多個文件上傳到同一個陣列中，使用[]會將上傳的檔案整合至同一陣列中
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
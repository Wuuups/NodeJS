import express from "express"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
// console.log(dirname(fileURLToPath(import.meta.url)))

app.use(express.static(resolve(__dirname, "public"))) //提供靜態檔案。它接受一個目錄作為參數，並將該目錄中的檔案提供給客戶端，如果請求匹配到提供的靜態檔案，則會直接返回該檔案的內容，而不會繼續往下匹配路由

app.get("/", (req, res) => {
   res.send("Home Page")
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
import http from "http"
import { readFileSync } from "fs"
import { dirname, join, resolve } from "path"


console.log(join("..", "test.html"))
console.log(resolve("test.html")) //resolve: 將相對路徑或URL轉換為絕對路徑或URL




//讀取外部檔案並回覆給瀏覽器 (readfile, filesync)
const server = http.createServer((request, response) => {
   response.setHeader("content-type", "text/html;charset=utf-8")
   const filePath = resolve(import.meta.dirname, "test.html") //獲取當前模組的目錄路徑
   const htmlContent = readFileSync(filePath) //使用sync是因為response.end是同步操作
   //從最上層抓到一個絕對的路徑
   // console.log(htmlContent.toString());
   response.end(htmlContent)
})

server.listen(9000, () => {
   console.log("伺服器已啟動 http://localhost:9000");
})
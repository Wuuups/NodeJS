import http from "http"
import { readFileSync } from "fs"
import { dirname, join, resolve } from "path"


// console.log(join("..", "test.html"))
// console.log(resolve("test.html"))


//從最上層抓到一個絕對的路徑
// console.log(htmlContent.toString());


//讀取外部檔案並回覆給瀏覽器 (readfile, filesync)
const server = http.createServer((request, response) => {
   response.setHeader("content-type", "text/html;charset=utf-8")
   const filePath = resolve(import.meta.dirname, "test.html") 
   const htmlContent = readFileSync(filePath)
   response.end(htmlContent)
})

server.listen(9000, () => {
   console.log("伺服器已啟動 http://localhost:9000");
})
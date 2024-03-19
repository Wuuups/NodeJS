import http from "http"

const server = http.createServer((request, response) => {
   

   response.setHeader("content-type", "text/html;charset=utf-8")
   response.statusCode = 404 //找不到請求的資源
   response.statusMessage = ":(" //不建議更動預設訊息文字
   response.setHeader("server", "doritos") //設定伺服器名稱
   response.write("test 1 <br>") //向HTTP響應的主體部分寫入了內容
   response.write("test 2 <br>")
   response.write("test 3 <br>")
   response.end("<h1>:(</h1>")
})

server.listen(9000, () => {
   console.log("伺服器已啟動 http://localhost:9000");
})
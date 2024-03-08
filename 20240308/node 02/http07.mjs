import http from "http"

const server = http.createServer((request, response) => {
   

   response.setHeader("content-type", "text/html;charset=utf-8")
   response.statusCode = 404
   response.statusMessage = ":(" //不建議更動預設訊息文字
   response.setHeader("server", "doritos")
   response.write("test 1 <br>")
   response.write("test 2 <br>")
   response.write("test 3 <br>")
   response.end("<h1>多力多滋</h1>")
})

server.listen(9000, () => {
   console.log("伺服器已啟動 http://localhost:9000");
})
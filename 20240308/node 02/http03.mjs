import http, { request } from "http"

const server = http.createServer((request, response) => {

   //GET沒有body, 不會有請求的主體
   //以目前而言, POST送出表單才會有請求主體
   //此檔案作為觀察, 未來會使用其他方法來請求主體

   let body = ""

   request.on("data", (chunk) => {
      body += chunk
   })

   request.on("end", () => {
      console.log(body);
      response.setHeader("content-type", "text/html;charset=utf-8")
      response.end("我想喝可樂")
   })
})

server.listen(9000, () => {
   console.log("server is running at http://localhost:9000")
})
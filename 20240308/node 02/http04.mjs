import http from "http"
import { parse } from "url"

const server = http.createServer((request, response) => {

   const res = parse(request.url, true)


   //傳統方法
   //由URL模組的parse方法取得網址參數
   //有更好的方法在http05

   if (res.pathname != "/favicon.ico") {
      console.log(res);
      console.log(`res.name = ${res.query.name}`);
      console.log(`res.password = ${res.query.password}`);
   }
   response.setHeader("content-type", "text/html;charset=utf-8")
   response.end("多力多滋")
})

server.listen(9000, () => {
   console.log("伺服器已啟動 http://localhost:9000");
})
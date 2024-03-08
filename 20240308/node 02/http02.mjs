import http from "http"

const server = http.createServer((request, response) => {
   // console.log(request.method); //顯示get/post/delete等方法
   // console.log(request.url); //路徑與網址參數
   // console.log(request.httpVersion);
   console.log(request.headers);
   response.setHeader("content-type", "text/html;charset=utf-8")
   response.end("我想睡覺")
})

server.listen(9000, ()=>{
   console.log("server is running at http://localhost:9000");
})
import http from "http"

const server = http.createServer((request, response) => {
   
   //官方文件目前所推薦的方法
   //透過URL物件解析網址參數
   const url = new URL(request.url, "http://localhost") //使用 request.url 作為相對 URL，並將其解析成完整的 URL，基於指定的基礎 URL 
   if (url.pathname != "/favicon.ico") {
      console.log(url)
      console.log(`name = ${url.searchParams.get("name")}`);
      console.log(`name = ${url.searchParams.get("pwd")}`);

   }
      
   response.setHeader("content-type", "text/html;charset=utf-8")
   response.end("多力多滋")
})

server.listen(9000, () => {
   console.log("伺服器已啟動 http://localhost:9000");
})
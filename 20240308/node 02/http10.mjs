import http from "http";
import { readFileSync } from "fs";
import { dirname, resolve, join } from "path";

//分流式讀取檔案
const server = http.createServer((request, response) => {
   const { pathname } = new URL(request.url, "http://localhost");
   let filePath, content;


   //瀏覽器解析HTML檔案並發現這些引用時，它會發送額外的請求以獲取這些資源
   if (pathname === "/") { //localhost, 根目錄
      response.setHeader("content-type", "text/html;charset=utf-8");
      filePath = resolve(import.meta.dirname, "test2.html");
      const content = readFileSync(filePath);
      response.end(content);
   } else if (pathname === "/test2.css") { //
      filePath = resolve(import.meta.dirname, "test2.css");
      content = readFileSync(filePath);
      response.end(content);
   } else if (pathname === "/test2.js") {
      filePath = resolve(import.meta.dirname, "test2.js");
      content = readFileSync(filePath);
      response.end(content);
   } else {
      response.end("<h1>讀不到檔案</h1>");
   }
});

server.listen(9000, () => {
   console.log("伺服器已啟動於 http://localhost:9000");
});
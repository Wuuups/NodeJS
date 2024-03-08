import http from "http";
import { readFileSync } from "fs";
import { dirname, resolve, join } from "path";


const server = http.createServer((request, response) => {
   let { pathname } = new URL(request.url, "http://localhost");
   if (pathname === "/") {
      pathname = "/index.html"
   }

   let root = "pages"
   if(process.argv[2] === "p"){
      root = "public"

   }

   let filePath = resolve(import.meta.dirname, root, pathname.slice(1));
   let content



   try {
      content = readFileSync(filePath);
      response.end(content);
   } catch (err) {
      response.setHeader("content-type", "text/html;charset=utf-8");
      response.statusCode = 500
      response.end("<h1>讀不到檔案</h1>");
   }

});

server.listen(9000, () => {
   console.log("伺服器已啟動於 http://localhost:9000");
});
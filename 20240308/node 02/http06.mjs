import http from "http";

const server = http.createServer((request, response) => {
  const { method, url } = request;
  //等於
  //const method = request.method;
  //const url = request.url;

  const { pathname } = new URL(url, "http://localhost");
  //等於
  //const urlObject = new URL(url, "http://localhost");
  //const pathname = urlObject.pathname;

  //由方法與路徑分流到不同的回應
  // if (pathname !== "/favicon.ico") {
  //    console.log(`method = ${method}`);
  //    console.log(`url = ${url}`);
  // }

  response.setHeader("content-type", "text/html;charset=utf-8");
  if (method === "GET" && pathname === "/login") { //用於向伺服器獲取資源所以使用GET
    response.end("登入頁"); 
  } else if (method === "GET" && pathname === "/reg") {
    response.end("註冊頁");
  } else {
    response.end("<h1>多力多滋</h1>");
  }
});

server.listen(9000, () => {
  console.log("伺服器已啟動 http://localhost:9000");
});

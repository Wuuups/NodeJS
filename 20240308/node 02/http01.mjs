import http from "http" //匯入模組


//建立伺服器
const server = http.createServer((request, response) => { 
   //request: 用戶端的請求, response: 伺服器的回應
   response.setHeader("content-type", "text/html;charset=utf-8") //設置回應的header
   response.end("多力多滋")
})

server.listen(9000, () => { //啟動伺服器
   console.log("伺服器已啟動 http://localhost:9000");
})
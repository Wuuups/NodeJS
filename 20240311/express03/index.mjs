import express from "express"

const app = express()

app.get("/", (req, res) => {

   //http模組內建
   res.send("Home page")
   console.log(`req.mehtod = ${req.method}`); //get
   console.log(`req.mehtod = ${req.url}`);
   console.log(`req.mehtod = ${req.httpVersion}`);
   console.log(req.headers);
})

app.get("/login", (req, res) => {

   //espress中的方法
   res.send("Login page")
   console.log(`req.path = ${req.path}`);
   console.log(req.query); //獲取 URL 查詢參數的屬性
   console.log(`name = ${req.query.name}`);
   console.log(`pwd = ${req.query.pwd}`);
   console.log(`req.ip = ${req.ip}`);
   console.log(`cookie = ${req.get("cookie")}`); //cookie設定後才有值
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
import express from "express"

const app = express() //將express的執行結果放入變數

app.get("/", (req, res) => { //到訪根目錄(localhost)
   res.setHeader("content-type", "text/html;charset=utf-8")
   res.end("Main page")
})


app.listen(3000, () => {
   console.log("server is running at http://localhost:3000");
})
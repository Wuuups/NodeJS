import express from "express"

const app = express()


//底下就是一連串的switch case

app.get("/", (req,res)=>{
   res.setHeader("content-type", "text/html;charset=utf-8")
   res.end("網站的主頁")
})


//兩種方法進入頁面

app.get("/login", (req,res)=>{
   res.setHeader("content-type", "text/html;charset=utf-8")
   res.end("登入頁面")
})

app.post("/login", (req,res)=>{
   res.setHeader("content-type", "text/html;charset=utf-8")
   res.end("進入登入的流程")
})

app.all("/test", (req,res)=>{ //所有方法都接(get post delete...等)
   res.setHeader("content-type", "text/html;charset=utf-8")
   res.end("進入TEST")
})

app.all("*", (req,res)=>{ //上面的所有路由規則無法符合會進入這邊﹐通常情況下放於最後
   // res.setHeader("content-type", "text/html;charset=utf-8")
   res.send("漢堡") //send = end + setheader﹐會自動設定正確的content-type
})



app.listen(3000, ()=>{
   console.log("server is running at http://localhost:3000");
})
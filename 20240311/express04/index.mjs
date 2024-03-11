import express from "express"
const fakeData = {
   "CvZP-PIguWG": "建立路由 /p/:id/，這個 :id 是可以自己命名的，只要命名與取用時是同一組字串即可",
   "CvRz0e3Awmi": "作業回饋已放在同學們的資料夾中，老師會陸續把同學們有趣的寫法放上來"
}

const app = express()

app.get("/", (req, res) => {
   res.send("Home page")
})

app.get("/p/:id?", (req, res) => {
   const { id } = req.params
   // let pageContent = "IG"
   // pageContent = fakeData[id]
   // console.log(id)

   let pageContent = ":id" ? fakeData[id] : "IG"

   // if (id === "CvZP-PIguWG") {
   //    pageContent = "建立路由 /p/:id/，這個 :id 是可以自己命名的，只要命名與取用時是同一組字串即可"
   // } else if (id === "CvRz0e3Awmi") {
   //    pageContent = "作業回饋已放在同學們的資料夾中，老師會陸續把同學們有趣的寫法放上來"
   // }
   res.send(pageContent)
})

app.get("/users/:userid?", (req, res) => { //? => 使參數成為選擇性
   console.log(`userid: ${req.params.userid}`);
   if (req.params.userid) {
      res.send(`userid :${req.params.userid}`)
   } else {
      res.send(`You are guest`)
   }
})

app.get("/books/:cateId/:bookId", (req, res) => { //多個參數
   res.send(`書本分類: ${req.params.cateId} <br> 書本編號: ${req.params.bookId}`)
})

app.get("/user/:id([a-z][0-9]+)", (req, res) => { //用正規表達式限定進入路由的規則
   res.send(`${req.params.userid}`)
})

app.get("/files/*", (req,res)=>{//萬用字元
   const filePath = req.params[0]
   res.send(`${filePath}`)
})

app.listen(3000, () => { 
   console.log("server is running at http://localhost:3000")
})
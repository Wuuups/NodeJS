import express from "express"
import cors from "cors"
import multer from "multer"

const app = express()
const upload = multer()

const whiteList = ["http://localhost:5500", "http://127.0.0.1:5000"];
const corsOptions = {
   credentials: true,
   origin(origin, callback) {
      if (!origin || whiteList.includes(origin)) {
         callback(null, true)
      } else {
         callback(new Error("不允許傳遞資料"))
      }
   }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get("/",(req,res)=>{
//    res.send("home page")
// })

app.post("/", upload.none(), (req, res) => {
   console.log(req.body);
   res.json({ message: "welcome" });
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000");
})
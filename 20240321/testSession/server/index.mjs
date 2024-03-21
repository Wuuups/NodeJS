import express from "express"
import cors from "cors"
import multer from "multer"
import session from "express-session"

const users = {
   "ben": {
      pwd: "a12345",
      name: "Ben Chen"
   },
   "mary": {
      pwd: "a12345",
      name: "Mary Lin"
   }
}

const app = express()
const upload = multer()

const whiteList = ["http://localhost:5500", "http://127.0.0.1:5500"];
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
app.use(session({
   secret: "back-yard",
   resave: false,
   saveUninitialized: true,
   cookie: {
      maxAge: 777777777
   }
}))

app.get("/checkLogin", (req, res)=>{
   console.log(req.session.user)
   const{user} = req.session
   res.json({user})
})

app.get("/logout", (req, res)=>{
delete req.session.user
   const{user} = req.session
   res.json({user})
})

// app.get("/",(req,res)=>{
//    res.send("home page")
// })

app.post("/", upload.none(), (req, res) => {
   console.log(req.body);
   console.log(req.cookies);
   console.log(req.get("cookie"));
   const { account, password } = req.body
   if (users[account] && users[account].pwd === password) {
      const user = users[account]
      user.account = account
      req.session.user = user
      res.json({user})
   } else {
      res.json({ error: "登入失敗" })
   }
})

app.listen(3000, () => {
   console.log("server is running");
})
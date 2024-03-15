import experss from "express"
import { resolve } from "path"
const app = experss()
const __dirname = import.meta.dirname

let user

app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views"))

//所有規則之前，樣板引擎之後
app.use("/bs", experss.static(resolve(__dirname,"node_modules/bootstrap/dist")))
app.use("/jq", experss.static(resolve(__dirname,"node_modules/jquery/dist")))

app.get("/", (req, res) => {
   res.send("home page")
})

app.get("/test01", (req, res) => {
   const name = "sam"
   const str = "yyoooo"
   res.render("test01", { name, str })
})

app.get("/test02", (req, res) => {
   const blackpink = ["Jennie", "Jisoo", "Lisa", "Rose"]
   res.render("test02", { blackpink })
})

app.get("/test03", (req, res) => {
   
   res.render("test03", {user})
})

app.get("/login", (req, res) => {
   user = {
      name: "Jackie Byrd",
      img: "https://randomuser.me/api/portraits/women/87.jpg"
   }
   res.redirect("/test03")
})

app.get("/logout", (req, res) => {
   user = undefined
   res.redirect("/test03")
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000");
})
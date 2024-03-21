import express from "express"
import {resolve} from "path"
const __dirname = import.meta.dirname

const app = express()

app.use(express.static(resolve(__dirname, "public"))) //先拿到靜態檔案中的內容所以先顯示

app.get("/", (req, res) => {
   res.send("Home Page")
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
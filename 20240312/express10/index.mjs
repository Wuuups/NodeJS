import express from "express"
import {resolve} from "path"
const __dirname = import.meta.dirname

const app = express()

app.use(express.static(resolve(__dirname, "public")))

app.get("/", (req, res) => {
   res.send("Home Page")
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
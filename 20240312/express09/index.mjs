import express from "express"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(express.static(resolve(__dirname, "public")))

// console.log(dirname(fileURLToPath(import.meta.url)))

app.get("/", (req, res) => {
   res.send("Home Page")
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
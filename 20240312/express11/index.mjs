import express from "express"
import { resolve } from "path"
const __dirname = import.meta.dirname

const app = express()


app.use('/bootstrap', express.static(resolve(__dirname, 'node_modules/bootstrap/dist')));
app.use('/fontawesome', express.static(resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.use('/jquery', express.static(resolve(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(resolve(__dirname, "public")))


//已提供靜態檔案
// app.get("/", (req, res) => {
//    res.send("Home page")
// })

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})
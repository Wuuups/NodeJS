import express from "express";
import {resolve} from "path";
import bodyParser from "body-parser";
const __dirname = import.meta.dirname;

const app = express();

// parse application/x-www-form-urlencoded
// 解析 form 元素表單
// extended 解析多層物件
// 下面是 top down middleware 的寫法
// app.use(bodyParser.urlencoded({ extended: true }))
// 下面是路由 middleware 的寫法
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
// bodyParser 納入正式的 express 版本中
const urlencodedParser = express.urlencoded({ extended: false })

// parse application/json
// 解析JSON格式的表單
// 下面是 top down middleware 的寫法
// app.use(bodyParser.json())
// 下面是路由 middleware 的寫法
// const jsonParser = bodyParser.json()
const jsonParser = express.json()




app.get("/", (req, res) => {
  res.send("網站首頁")
});

app.get("/login", (req, res) => {
  // res.send("顥示表單")
  res.sendFile(resolve(__dirname, "form.html"));
});

app.post("/login", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send("進入送出流程")
});


app.listen(3000, () => {
  ;console.log("伺服器已啟動於 http://localhost:3000");
})
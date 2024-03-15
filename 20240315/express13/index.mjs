import express from "express";
import usersRouter from "./usersRouters.mjs";
import productRouters from "./productRouters.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁")
});

app.use("/users",usersRouter);
app.use("/products",productRouters);





app.get("/search", (req, res) => {
  res.send("全站搜尋")
});


app.listen(3000, () => {
  ;console.log("伺服器已啟動於 http://localhost:3000");
})
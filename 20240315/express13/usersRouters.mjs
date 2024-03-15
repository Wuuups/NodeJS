import express from "express";

const router = express.Router();

router.get("", (req, res) => {
  res.send("使用者 list 頁面");
});

router.get("/login", (req, res) => {
    res.send("使用者登入頁面");
  });

router.get("/:id", (req, res) => {
  res.send("某個使用者頁面");
});



router.post("/login", (req, res) => {
  res.send("使用者登入流程");
});

export default router;

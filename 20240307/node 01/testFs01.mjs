import { writeFile } from "fs" //從模組中導入一個單一的方法

const file1 = "./測試寫入_esm.txt"
const content1 = "午餐吃雞腿"

writeFile(file1, content1, (error) => { //位置以及內容
   if (error) {
      console.log("fail")
      return false //中止
   }
   console.log("success");
})


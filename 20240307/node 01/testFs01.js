const fs = require("fs") //導入整個模組

const file1 = "./測試寫入.txt"
const content1 = "午餐吃雞腿"

fs.writeFile(file1, content1, function(error){ //使用模組中的方法
   if(error){
      console.log("1 寫入失敗")
      return false //中止
   }
   console.log("2 寫入成功");
   // if(error){
   //    console.log("寫入失敗")
   // }else{
   //    console.log("寫入成功")
   // }
})

console.log("3 測試用字串"); //作用域最頂端
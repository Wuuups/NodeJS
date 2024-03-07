import {appendFile} from "fs"

const file1 = "./測試寫入2_esm.txt"
const content1 = "午餐吃雞腿"
const content2 = "\r\n麥當勞"

appendFile(file1, content2, (error)=>{ //在不覆蓋的情況下增加內容
   if(error){
      console.log("寫入失敗");
      return false
   }
   console.log("增加成功");
})

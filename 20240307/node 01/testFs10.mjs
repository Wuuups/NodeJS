import {renameSync} from "fs"

renameSync("./測試連續寫入.txt", "./甲霸沒.txt", (error)=>{
   if(error){
      console.log("修改失敗")
      return false
   }
   console.log("修改成功")
})
import {renameSync} from "fs"

rename("./價爸沒.txt", "./text/價爸沒.txt", (error)=>{
   if(error){
      console.log("修改失敗")
      return false
   }
   console.log("修改成功")
}) //檔案搬移
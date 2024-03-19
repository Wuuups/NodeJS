import { readFileSync, renameSync, writeFileSync, unlink, rm } from "fs"

// renameSync("./價爸沒.txt", "./text/價爸沒.txt", (error)=>{
//    if(error){
//       console.log("修改失敗")
//       return false
//    }
//    console.log("修改成功")
// }) //檔案搬移



//[ 'node', '/path/to/script.js', 'arg1', 'arg2', 'arg3' ] arg是命令行參數 執行檔路徑和當前正在執行的 JavaScript 檔案的路徑
if (process.argv[2] === "copy") {
   const data = readFileSync("./text/價爸沒2.txt")
   writeFileSync("./text/價爸沒.txt", data) //用變數帶進去
} else {
   // unlink("./text/價爸沒.txt", (error) => { //刪除
   //    if (error) {
   //       console.log("刪除失敗")
   //       return false
   //    }
   //    console.log("刪除成功")
   // })
   rm("./text/價爸沒.txt", (error) => { //rm 是刪除
      if (error) {
         console.log("刪除失敗")
         return false
      }
      console.log("刪除成功")
   })
}


// renameSync("./text/價爸沒.txt", "./text/價爸沒2.txt")


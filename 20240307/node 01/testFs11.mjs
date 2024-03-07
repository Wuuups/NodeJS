import { readFileSync, renameSync, writeFileSync, unlink, rm } from "fs"

// renameSync("./價爸沒.txt", "./text/價爸沒.txt", (error)=>{
//    if(error){
//       console.log("修改失敗")
//       return false
//    }
//    console.log("修改成功")
// }) //檔案搬移

if (process.argv[2] === "copy") {
   const data = readFileSync("./text/價爸沒2.txt")
   writeFileSync("./text/價爸沒.txt", data)
} else {
   // unlink("./text/價爸沒.txt", (error) => {
   //    if (error) {
   //       console.log("刪除失敗")
   //       return false
   //    }
   //    console.log("刪除成功")
   // })
   rm("./text/價爸沒.txt", (error) => {
      if (error) {
         console.log("刪除失敗")
         return false
      }
      console.log("刪除成功")
   })
}


// renameSync("./text/價爸沒.txt", "./text/價爸沒2.txt")


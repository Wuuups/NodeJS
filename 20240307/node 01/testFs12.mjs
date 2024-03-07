import { mkdir, readdir, rmdir, rm } from "fs"


if (process.argv[2] === "mkdir") {
   // mkdir("./html", (error)=>{
   mkdir("./a/b/c", { recursive: true }, (error) => { //遞迴方式建立資料夾
      if (error) {
         console.log("建立資料夾失敗")
         return false
      }
      console.log("建立資料夾成功")
   })
} else if (process.argv[2] === "readdir") {
   readdir("./video1", (error, files) => {
      if (error) {
         console.log("讀取資料夾失敗")
         return false
      }
      console.log("讀取資料夾成功")
      console.log(files)
   })
} else if (process.argv[2] === "rmdir") {
   // rm("./html", (error) => {
   rm("./a", { recursive: true }, (error) => {
      if (error) {
         console.log("刪除資料夾失敗")
         return false
      }
      console.log("刪除資料夾成功")
   })
}



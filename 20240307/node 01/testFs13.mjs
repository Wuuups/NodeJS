import { stat, existsSync } from "fs"

let path = "./video/movie.mp4"

if (process.argv[2] === "1") {
   path = "./video"
} else if(process.argv[2] === "2"){
   path = "./video1"
}

stat(path, (error, data) => {
   if (error) {
      console.log("讀取失敗")
      console.log(error)
      return false
   }
   console.log("讀取成功");
   console.log(data.birthtimeMs);
   console.log(new Date(data.birthtimeMs))
})

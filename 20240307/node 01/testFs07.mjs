import { createReadStream } from "fs"

const rs = createReadStream("./video/movie.mp4") //物件形式, 以64k切分並重新組合

rs.on("data", chunk => {
   console.log(chunk.length);
}) //切分

rs.on("end", () => {
   console.log("讀取結束");
})
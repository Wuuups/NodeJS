import { createReadStream, createWriteStream } from "fs"

const rs = createReadStream("./video/movie.mp4") //物件形式, 以64k切分並重新組合
const ws = createWriteStream("./video/movie4.mp4")

//以下等於pipe
// rs.on("data", chunk => {
//    console.log(chunk.length)
//    ws.write(chunk)
// }) 

rs.on("end", () => {
   console.log("讀取結束")
})

rs.pipe(ws)
import { createReadStream } from "fs"

const rs = createReadStream("./video/movie.mp4") //物件形式, 以64k切分並重新組合

console.log(typeof(rs), rs);

rs.on("data", chunk => { //當讀取到新的數據塊時
   console.log(chunk.length);
}) //切分

// rs.on("open",chunk =>{ //打開時
//    console.log(data);
// })

rs.on("end", () => { //讀取完整個檔案時
   console.log("讀取結束");
})
import {readFile, readFileSync, writeFileSync} from "fs" //從模組中導入多個方法

const data = readFile("./video/movie.mp4")

// console.log(typeof(data))

writeFileSync("./video/movie2.mp4",data) //複製
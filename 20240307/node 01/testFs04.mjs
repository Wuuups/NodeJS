import {createWriteStream} from "fs" //串流方式寫入

const ws = createWriteStream("./測試連續寫入.txt")

ws.on("finish",()=>{
   console.log('全部寫入完成');
})//完成時做....

ws.write("漢堡王\r\n")
ws.write("麥當勞\r\n")
ws.write("肯德基\r\n")
ws.write("摩斯\r\n")

ws.end()
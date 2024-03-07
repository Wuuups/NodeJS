const fs = require("fs") //導入整個模組

const file1 = "./測試寫入2.txt"
const content1 = "午餐吃雞腿"

fs.writeFileSync(file1, content1) //會把裡面的跑完在繼續往下


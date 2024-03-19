import {writeFileSync } from "fs" //導入一個單一的方法

const file1 = "./測試寫入2_esm.txt"
const content1 = "\r\n午餐吃雞腿"

writeFileSync(file1, content1,{flag: "a"}) //{flag: "a"}就是append的意思, 不會把前面的覆蓋掉

// const content2 = "麥當勞"

// writeFileSync(file1, content2) //會覆蓋前面

import {readFileSync} from "fs"


try{
   const data = readFileSync("./測試連續寫入0.txt")
   console.log(data.toString())
}catch(error){
   console.log("讀取失敗")
}



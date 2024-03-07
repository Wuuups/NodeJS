const fs = require("fs")


//更改顯示時的名稱
fs.readdir("./works", (error, data)=>{
   if(error){
      console.log("讀取失敗")
   }
   data.forEach((fileName, index)=>{
      const result = fileName.match(/work(\d+)\.html/);
      // console.log(result);
      const serialNumber = result[1].padStart(2, "0");
      fileName = `work${serialNumber}`
      console.log(fileName)
   })
}) 


//更改檔名
fs.readdir("./works", (error, data) => {
   if (error) {
      console.log("讀取失敗")
      return false
   }
   let i = 1
   data.forEach((fileName) => {
      const serialNumber = String(i).padStart(2, "0")
      fs.renameSync(`./works/${fileName}`, `./works/work${serialNumber}.html`)
      i++
   })
   console.log(data)
});
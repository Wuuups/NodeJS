import { readFile } from "fs"

readFile("./測試連續寫入.txt", (error, data) => {
   if (error) {
      console.log("讀取失敗");
      return false //終止在error情況下的程式碼執行
   }
   console.log(data.toString());
})


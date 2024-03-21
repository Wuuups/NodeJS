import { readFile } from "fs"

readFile("./測試連續寫入.txt", (error, data) => { //讀到的資料會丟到buffer緩衝區中
   if (error) {
      console.log("讀取失敗");
      return false //終止在error情況下的程式碼執行
   }
   // console.log(data.toString());
   console.log(data);
   console.log(typeof(data),"\n",data.toJSON(toString(data)));
})


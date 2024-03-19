const fs = require("fs")

try{

   fs.writeFileSync(__dirname+"/test.html", "test test 666")
   console.log(__dirname); //當前文件所在的目錄的絕對路徑(上一個)
   console.log(__filename); //當前文件的絕對路徑(當下)
   console.log("建立成功");
}catch(err){
   if(err){
      console.log("建立失敗");
   }
}
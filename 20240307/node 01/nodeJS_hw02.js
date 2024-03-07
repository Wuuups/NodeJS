const fs = require("fs")


for (let i = 1; i <= 20; i++) {

   fs.rename(`./work${i}.html`, `./works/work${i}.html`, (error) => {
      if (error) {
         console.log(`搬移${i}失敗`)
         console.log(error);
         return false
      }
      console.log(`搬移${i}成功`)
   })
}

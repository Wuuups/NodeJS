const fs = require("fs")


for (let n = 1; n <= 20; n++) {
   const file = `./work${n}.html`
   const content = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
   </head>
   <body>
      <h1>這是第${n}的HTML檔案</h1>
   </body>
   </html>
   `
   fs.writeFile(file, content, (error) => {
      if (error) {
         console.log(`寫入${n}失敗`)
         return false
      }
   })
   console.log(`寫入${n}成功`)
}

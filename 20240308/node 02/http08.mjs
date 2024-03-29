import http from "http"

const server = http.createServer((request, response) => {
   response.setHeader("content-type", "text/html;charset=utf-8")
   response.end(`
   <!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Test</title>
   <style>
      .row{
         display: flex;
         width: 180px;
         background: #999;
         &:nth-child(odd){
            background: #ccc;
         }
         .col{
            width: 60px;
            height: 30px;
            /* display: flex;
            justify-content: center;
            align-items: center; */
            display: grid;
            place-items: center;
            cursor: pointer;
            user-select: none;
            &.active{
               background: lightgreen;
            }
            &.active:nth-child(odd){
               background: #77b0c4;
               color: #fff;
            }
         }
      }
   </style>
</head>
<body>
   <div class="row">
      <div class="col">1-1</div>
      <div class="col">1-2</div>
      <div class="col">1-3</div>
   </div>
   <div class="row">
      <div class="col">2-1</div>
      <div class="col">2-2</div>
      <div class="col">2-3</div>
   </div>
   <div class="row">
      <div class="col">3-1</div>
      <div class="col">3-2</div>
      <div class="col">3-3</div>
   </div>
   <div class="row">
      <div class="col">4-1</div>
      <div class="col">4-2</div>
      <div class="col">4-3</div>
   </div>
   <script>
      const cols = document.querySelectorAll(".col")
      // Array.from(cols).map()
      // [...cols].map()
      cols.forEach(col => {
         col.addEventListener("click", function(){
            this.classList.toggle("active")
         })
      });

   </script>
</body>
</html>
   `)
})

server.listen(9000, () => {
   console.log("伺服器已啟動 http://localhost:9000");
})
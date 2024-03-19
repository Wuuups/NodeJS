let a
console.log("start")

new Promise((resolve, reject) => {
   setTimeout(() => {
      a = 10
      console.log("processing")
      resolve()
   }, 3000)
}).then(() => {
   function end() {
      console.log("end, a+a=" + (a + a))
   }
}).catch((error)=>{
   console.log(error);
})

// Pending（進行中）：初始化狀態，不是成功也不是失敗狀態。
// Fulfilled（已成功）：表示操作成功完成。
// Rejected（已失敗）：表示操作失敗。



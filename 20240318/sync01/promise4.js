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
})





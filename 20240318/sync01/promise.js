let a
console.log("start")

setTimeout(() => {
   a = 10
   console.log("processing");
}, 3000)

console.log("end, a+a="+(a+a))

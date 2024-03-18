let a
console.log("start")

setTimeout((after) => {
   a = 10
   console.log("processing")
   after()
}, 3000, end)


function end() {
   console.log("end, a+a=" + (a + a))
}

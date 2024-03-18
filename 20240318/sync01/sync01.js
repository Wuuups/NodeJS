let t1 = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("函數一的執行結果");
         resolve()
      }, 2000)
   })
}

let t2 = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("函數二的執行結果");
         resolve()
      }, 4000)
   })
}

let t3 = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("函數三的執行結果");
         resolve()
      }, 1000)
   })
}

(async function () {
   await t1()
   await t2()
   await t3()
})()

async function doThing() {
   await t1()
   await t2()
   await t3()
}

// doThing()
//3 -> 1 -> 2


(async () => {})()
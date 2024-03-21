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

//async 關鍵字用於定義一個函式，使其返回一個 Promise。當你在函式前面加上 async 關鍵字時，該函式內部的任何非同步操作都會返回一個 Promise 物件。

(async function () { //執行的函數有回傳 reslove 或 reject 才會往下一行進行
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


(async () => {})() //寫法
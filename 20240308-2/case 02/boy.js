const aaa = "aaa"

function sayMyName(){
   console.log("burger")
}

function sayMyCountry(){
   console.log("123")
}

// module.exports = {
//    SMD: SMD,
//    sayMyCountry: sayMyCountry
// }


//名字依樣可以省略
module.exports = {
   sayMyName, sayMyCountry, aaa
}

// exports.sayMyName = sayMyName
// exports.sayMyCountry = sayMyCountry
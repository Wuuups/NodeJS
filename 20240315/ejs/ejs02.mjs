import ejs from "ejs"
import {readFileSync} from "fs"
import {resolve} from "path"
const __dirname = import.meta.dirname

const blackpink = ["Jennie", "Jisoo", "Lisa", "Rose"]
// let str = "<ul>"
// blackpink.forEach(name =>{
//    str += `<li>${name}</li>`
// })
// str+="</ul>"
const template = readFileSync(resolve(__dirname,"template02.html")).toString()
const result = ejs.render(template,{blackpink}) 
// { blackpink }：是一個 JavaScript 對象，它包含了要傳遞到模板中的數據。在這裡，blackpink 是一個陣列，其中包含了需要在模板中使用的數據

// const result = ejs.render(`
//    <ul>
//       <% blackpink.forEach(name =>{ %>
//       <li><%=name%></li>
//       <% }) %>
//    </ul>
// `
//    ,{blackpink}
// )

console.log(result);
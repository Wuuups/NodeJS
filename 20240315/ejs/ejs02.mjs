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
const isLog = (process.argv[2])?(process.argv[2]).toLocaleLowerCase():false

let clg = (content) =>{
   if(isLog === "true"){
   console.log(content);
   }
}

clg(process.argv)


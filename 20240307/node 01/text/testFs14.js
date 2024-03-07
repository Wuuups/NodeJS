const fs = require("fs")

fs.writeFileSync(__dirname+"/test.html", "test test 666")
console.log(__dirname);
console.log(__filename);
const fs = require("fs")

const file1 = "./測試寫入.txt"
const content1 = "\r\n麥當勞"

fs.appendFileSync(file1, content1)
const fs = require("fs");

try {
  fs.mkdirSync("./zero");
  try {
    for (let i = 1; i <= 20; i++) {
      let serialNumber = String(i).padStart(2, "0");
      const file = `./zero/我今天吃${serialNumber}片多力多滋.html`;
      fs.writeFileSync(file,"");
    }
  } catch (error) {
    console.log("建立檔案失敗", error);
  }
} catch (error) {
  console.log("建立資料夾失敗", error);
}

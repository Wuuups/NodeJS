import { stat, existsSync } from "fs";

let path = "./video/movie.mp4";

if (process.argv[2] === "1") {
  path = "./video";
} else if (process.argv[2] === "2") {
  path = "./video1";
}

stat(path, (error, stats) => {
  //stat: 獲取檔案或資料夾的詳細資訊
  if (error) {
    console.log("讀取失敗");
    console.log(error);
    return false;
  }

  // stats.isFile()：如果是一個檔案，則返回 true。
  // stats.isDirectory()：如果是一個資料夾，則返回 true。
  // stats.size：檔案大小（以位元組為單位）。
  // stats.birthtime：檔案的創建時間。
  // stats.mtime：檔案的修改時間。

  console.log("讀取成功");
  console.log(path);
  console.log(typeof path);
  console.log(stats.birthtimeMs); //以毫秒為單位的創建時間
  console.log(new Date(stats.birthtimeMs));
});

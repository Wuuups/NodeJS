import {parse, resolve, sep, basename, dirname, extname, join} from "path"
import {fileURLToPath} from "url"

// console.log(resolve("aaa.txt")); //返回一個絕對路徑字符串, 並不會檢查路徑是否存在
// console.log(sep); //表示各個系統上的分隔符長啥樣
// console.log(import.meta); //import用於導入其他模組，而import.meta用於獲取當前模組的元資訊，包含這段代碼的文件本身
// console.log(fileURLToPath(import.meta.url));
// console.log(parse(import.meta.url));
// console.log(import.meta.dirname);
// console.log(import.meta.filename);

//取得完整檔名
// console.log(basename(import.meta.filename));

//取得basename
// console.log(parse(import.meta.filename));

//取得路徑名稱
// console.log(dirname(import.meta.filename));

//取得dirname
// console.log(parse(import.meta.filename).dir)

//取得副檔名
// console.log(extname(import.meta.filename));

//與上述方法同效果
// console.log(parse(import.meta.filename).ext);

//獲取完整路徑
// console.log(resolve("測試寫入2.txt"));。
console.log(resolve(import.meta.dirname, "測試寫入2.txt"));
console.log(join(import.meta.dirname, "測試寫入2.txt"));
// console.log(import.meta.dirname);



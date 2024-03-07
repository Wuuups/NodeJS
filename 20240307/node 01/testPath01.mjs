import {parse, resolve, sep, basename, dirname, extname, join} from "path"
import {fileURLToPath} from "url"

// console.log(resolve("aaa.txt"));
// console.log(sep);
// console.log(import.meta.url);
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



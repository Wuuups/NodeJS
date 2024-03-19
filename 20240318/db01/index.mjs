import connection from "./db01.mjs";

let id = 4;
let data;

// query : 第一個參數是 SQL 查詢語句，第二個參數是一個數組，其中包含了 SQL 查詢的參數。第三個參數是一個回調函式，用於處理查詢的結果
connection.query(
  "SELECT * FROM `sort` WHERE `id` = ?",
  [id],
  (error, result, fields) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(result);
    console.log(fields);
    // data = result
    // console.log(data);
  }
);

// error: 表示在執行 SQL 查詢時發生的錯誤。如果查詢成功完成，則此參數為 null 或 undefined。如果發生錯誤，則此參數將包含錯誤的相關信息。
// result: 表示查詢的結果。這通常是一個包含查詢結果的數組，每個元素是一條記錄。
// fields: 表示查詢結果的字段信息。這通常是一個描述查詢結果的數組，每個元素包含字段的名稱、類型等信息。

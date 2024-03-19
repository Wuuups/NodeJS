getUserInfo(function(userInfo) {
   getArticles(userInfo.userId, function(articles) {
       articles.forEach(function(article) {
           console.log(article.title);
       });
   });
});

function getUserInfo(callback) {
   // 這裡發起一個 HTTP 請求取得使用者資訊
   setTimeout(function() {
       var userInfo = { userId: 1, username: 'exampleUser' };
       callback(userInfo);
   }, 1000);
}

function getArticles(userId, callback) {
   // 這裡發起一個 HTTP 請求取得使用者文章
   setTimeout(function() {
       var articles = [
           { id: 1, title: 'Article 1' },
           { id: 2, title: 'Article 2' },
           { id: 3, title: 'Article 3' }
       ];
       callback(articles);
   }, 1000);
}

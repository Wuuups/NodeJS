getUserInfo()
    .then(userInfo => getArticles(userInfo.userId))
    .then(articles => {
        articles.forEach(article => {
            console.log(article.title);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

function getUserInfo() {
    return new Promise((resolve, reject) => {
        // 這裡發起一個 HTTP 請求取得使用者資訊
        setTimeout(() => {
            var userInfo = { userId: 1, username: 'exampleUser' };
            resolve(userInfo);
        }, 1000);
    });
}

function getArticles(userId) {
    return new Promise((resolve, reject) => {
        // 這裡發起一個 HTTP 請求取得使用者文章
        setTimeout(() => {
            var articles = [
                { id: 1, title: 'Article 1' },
                { id: 2, title: 'Article 2' },
                { id: 3, title: 'Article 3' }
            ];
            resolve(articles);
        }, 1000);
    });
}

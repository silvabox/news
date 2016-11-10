(function(exports) {

 function ArticleGetter() {
   var article;
   var articleUrl;
   var title;
   var body;
 };

 ArticleGetter.prototype.getArticles = function() {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&page-size=5", true);
   xhr.onload = function (e) {
     if (xhr.readyState === 4) {
       if (xhr.status === 200) {
         guardianArticleObject = JSON.parse(xhr.responseText)
         guardianArticleArray = guardianArticleObject.response.results
         console.log(guardianArticleObject)
         return guardianArticleArray.map(function(guardianArticle) {
           articleUrl = guardianArticle.webUrl;
           title = guardianArticle.webTitle;
           return new Article(title, articleUrl);
         })
         console.log("success");
       } else {
         console.error(xhr.statusText);
       }
     }
   };
   xhr.onerror = function (e) {
     console.error(xhr.statusText);
   };
   xhr.send(null);
 }

 exports.ArticleGetter = ArticleGetter;
})(this);

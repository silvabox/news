(function(exports) {

 function ArticleGetter() {
   var article;

 };

 ArticleGetter.prototype.getArticle = function() {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body", false);
   xhr.send();
   articleobject = JSON.parse(xhr.response)
   title = articleobject.response.content.webTitle
   article = new Article(title)
   return article

 }

 exports.ArticleGetter = ArticleGetter;
})(this);

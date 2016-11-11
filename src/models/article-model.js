(function(exports) {
 function Article(title, articleUrl){
   this.title = title;
   this.articleUrl = articleUrl;
 };

 Article.prototype.returnText = function () {
   return this.title + "</br>" + this.articleUrl
 };

 Article.prototype.summarizeBody = function () {
   var xhr = new XMLHttpRequest();
   aylienUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + this.articleUrl
   xhr.open("GET", aylienUrl, true);
   xhr.send();
   summaryObject = JSON.parse(xhr.response)
   return summaryObject.sentences
 };

 exports.Article = Article;
})(this);

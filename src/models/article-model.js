(function(exports) {
 function Article(title, articleUrl, apiUrl, pubDate, articleBody){
   Article.numInstances = (Article.numInstances || 0) + 1;
   this.id = Article.numInstances
   this.title = title;
   this.apiUrl = apiUrl.replace(/s/, "")
   this.articleUrl = articleUrl;
   this.pubDate = pubDate;
   this.articleBody = articleBody;
 };

 Article.prototype.returnTitle = function () {
   return this.title;
 };

 Article.prototype.returnArticleBody = function () {
    return this.articleBody
 };

 exports.Article = Article;
})(this);

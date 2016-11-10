(function(exports) {
  function Article(title, articleUrl, body){
    this.body = body;
    this.title= title;
    this.articleUrl = articleUrl
  };

  Article.prototype.returnText = function () {
    return this.title + " " + this.articleUrl
  };

  exports.Article = Article;
})(this);

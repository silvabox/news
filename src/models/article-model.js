(function(exports) {
  function Article(text){
    this.text = text

  };

  Article.prototype.returnText = function () {
    return this.text
  };

  exports.Article = Article;
})(this);

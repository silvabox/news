(function(exports) {

  function List(articleGetter) {
    var article;
    this.listArray = articleGetter.getArticles();
  };

  List.prototype.addArticle = function(text) {
    article = new Article(text);
    this.listArray.push(article)
  };

  List.prototype.returnArticles = function () {
    return this.listArray
  };

  List.prototype.findArticleById = function(id) {
    for (var i = 0; i < this.listArray.length; i++) {
      if (this.listArray[i].id === id) {
        return this.listArray[i];
      }
    }
  };

  exports.List = List;
})(this);

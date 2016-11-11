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

  exports.List = List;
})(this);

(function(exports) {

  function List() {
    var article;
    this.listArray = []
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

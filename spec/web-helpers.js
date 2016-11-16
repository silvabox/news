(function(exports) {
  function setUpCreateList() {
    articlegetter = new ArticleGetter();
    newarticle = new Article ('News Story', "http://url")
    articlegetter.getArticles = function () {
      return [newarticle];
    }
    list = new List (articlegetter);
    return list
  };

  exports.setUpCreateList = setUpCreateList;
})(this);

(function(exports) {

  function ArticleListView() {
  };

  ArticleListView.prototype.renderAll = function(list) {
    articlesArray = list.returnArticles();
    return addULTags(addListDivAndJoin(articlesArray));
  }

  function addListDivAndJoin(articlesArray) {
    return articlesArray.map(function(article) {
      return '<li><div>' + article.returnText() + "</div></li>";
    }).join("");
  };

  function addULTags(list) {
    return "<ul>" + list + "</ul>";
  }


exports.ArticleListView = ArticleListView;
})(this);

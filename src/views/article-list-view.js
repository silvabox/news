(function(exports) {

  function ArticleListView() {
  };

  ArticleListView.prototype.renderAll = function(list) {
    articlesArray = list.returnArticles();
    return addContainer(addULTags(addListDivAndJoin(articlesArray)));
  }

  function addListDivAndJoin(articlesArray) {
    return articlesArray.map(function(article) {
      return '<li><a href="#article/' + article.id + '"><div>' + article.returnTitle() + "</div></a></li>";
    }).join("");
  };

  function addULTags(list) {
    return "<ul>" + list + "</ul>";
  }

  function addContainer(list) {
    return "<container>" + list + "</container>"
  }


exports.ArticleListView = ArticleListView;
})(this);

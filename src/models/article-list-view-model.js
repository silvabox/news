(function(exports) {

  function ArticleListView() {

  };

  ArticleListView.prototype.renderAll = function(list) {
    //console.log(list)

    text = (list.returnArticles()[0].returnText())
    return '<ul><li><div>' + text + '</div></li></ul>'
  }




exports.ArticleListView = ArticleListView;
})(this);

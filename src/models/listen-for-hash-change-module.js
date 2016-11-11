(function(exports) {
  function makeURLChangeShowArticleForCurrentPage() {
    window.addEventListener("hashchange", showArticleForCurrentPage);
  }

  function showArticleForCurrentPage() {
    showArticle(getArticleFromUrl(window.location));
  }

  function getArticleFromUrl(location) {
    return location.hash.split("#article/")[1];
  }

  function showArticle(article_id) {
    var article = this.list.findArticleById(parseInt(article_id));
    console.log(article)
    var singleArticleView = new SingleArticleView(article);
    document.getElementById("app").innerHTML = singleArticleView.addReturnLink() + singleArticleView.renderArticle();
    listenForBackToAllArticles();
  }

  exports.makeURLChangeShowArticleForCurrentPage = makeURLChangeShowArticleForCurrentPage;


})(this);

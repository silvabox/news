(function(exports) {

  function SingleArticleView(article) {
    this.article = article;
  }

  SingleArticleView.prototype.renderArticle = function() {
    return '<div class="article-title">' + this.article.title + "</div>" + '<div class="article-body">' + this.article.returnArticleBody() + "</div>";
  };

  SingleArticleView.prototype.addReturnLink = function() {
    return '<div class="button"><a href="/" id="back_to_articles">Back to All Articles</a></div>';
  };

  exports.SingleArticleView = SingleArticleView;

})(this);

(function(exports) {

  function SingleArticleView(article) {
    this.article = article;
  }

  SingleArticleView.prototype.renderArticle = function() {
    console.log("singleArtView = " + this.article.articleBody)
    return "<div>" + this.article.title + "</div>" + "<div>" + this.article.returnArticleBody() + "</div>";
  };

  SingleArticleView.prototype.addReturnLink = function() {
    return '<a href="/" id="back_to_articles">Back to All Articles</a></br>';
  };

  exports.SingleArticleView = SingleArticleView;

})(this);

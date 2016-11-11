(function(exports) {
  function ArticleGetter (){};

  ArticleGetter.prototype.getArticles = function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&page-size=5", false);
    xhr.send();
    guardianArticleObject = JSON.parse(xhr.response)
    guardianArticleArray = guardianArticleObject.response.results
    return guardianArticleArray.map(function(guardianArticle) {
      articleUrl = guardianArticle.webUrl;
      title = guardianArticle.webTitle;
      return new Article(title, articleUrl);
    })
};

exports.ArticleGetter = ArticleGetter;

})(this);

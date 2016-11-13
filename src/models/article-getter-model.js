(function(exports) {
  function ArticleGetter (){
  };

  ArticleGetter.prototype.getArticles = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        guardianArticleObject = JSON.parse(xhr.response)
        guardianArticleArray = guardianArticleObject.response.results
        articleArray = guardianArticleArray.map(function(guardianArticle) {
          articleUrl = guardianArticle.webUrl;
          apiUrl = guardianArticle.apiUrl.replace(/s/, "")
          title = guardianArticle.webTitle;
          pubDate = guardianArticle.webPublicationDate
          articleBody = summarizeBody(apiUrl);
          return new Article(title, articleUrl, apiUrl, pubDate, articleBody);
        })
        return articleArray;
      }
    };
    xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&page-size=5", false);
    xhr.send();
    return articleArray
  };

  function summarizeBody(apiUrl) {
    var artBody;
    var xhttp = new XMLHttpRequest();
    aylienUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + apiUrl + "?show-fields=body";
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Action to be performed when the document is read;
        summaryObject = JSON.parse(xhttp.response);
        articleBody = summaryObject.response.content.fields.body
        return articleBody;
      }
    };
    xhttp.open("GET", aylienUrl, false);
    xhttp.send();
    return articleBody;
  };

  exports.ArticleGetter = ArticleGetter;

})(this);

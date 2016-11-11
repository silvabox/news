(function(exports) {
  function ArticleGetter (){
  };

  ArticleGetter.prototype.getArticles = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        guardianArticleObject = JSON.parse(xhr.response)
        guardianArticleArray = guardianArticleObject.response.results
        console.log(guardianArticleArray)
        return guardianArticleArray.map(function(guardianArticle) {
          articleUrl = guardianArticle.webUrl;
          apiUrl = guardianArticle.apiUrl
          title = guardianArticle.webTitle;
          pubDate = guardianArticle.webPublicationDate
          articleBody = summarizeBody(apiUrl);
          return new Article(title, articleUrl, apiUrl, pubDate, articleBody);
        })
      }
    };
    xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&page-size=5", false);
    xhr.send();
  };

  function summarizeBody(apiUrl) {
    var xhttp = new XMLHttpRequest();
    aylienUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + apiUrl + "?show-fields=body";
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Action to be performed when the document is read;
        summaryObject = JSON.parse(xhttp.response);
        articleBody = summaryObject.response.content.fields.body
        console.log("summarize Body =" + articleBody)
        return articleBody
      }
    };
    xhttp.open("GET", aylienUrl, true);
    xhttp.send();
  };

  exports.ArticleGetter = ArticleGetter;

})(this);

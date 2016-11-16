(function(exports) {
  function listenForBackToAllArticles() {
    document
      .getElementById("back_to_articles")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        clearWindowHash();
        articleController.insertHTML();
    });
  }

  exports.listenForBackToAllArticles = listenForBackToAllArticles;
})(this);

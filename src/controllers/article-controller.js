(function(exports) {

  function ArticleController(list) {
    this.list = list
    this.articleListView = new ArticleListView();
  }

  ArticleController.prototype.insertHTML = function() {
    var html = this.articleListView.renderAll(this.list);
    document.getElementById("app").innerHTML=html;
  };



  // console.log(document.getElementById("app"))
  //
  // appDiv = document.getElementById("app")
  // appDiv.textContent = "howdy"

  exports.ArticleController = ArticleController;
})(this);

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html", false);
// xhr.send(null);
//
// article = JSON.parse(xhr.response)
// console.log(article.response.content.fields.body)

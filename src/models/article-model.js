(function(exports) {
 function Article(title, articleUrl, apiUrl, pubDate){
   Article.numInstances = (Article.numInstances || 0) + 1;
   this.id = Article.numInstances
   this.title = title;
   this.apiUrl = apiUrl
   this.articleUrl = articleUrl;
   this.pubDate = pubDate;
 };

 Article.prototype.returnTitle = function () {
   return this.title;
 };

 Article.prototype.returnArticleBody = function () {
   if (this.articleBody) {
     console.log("have it saved mate")
     return this.articleBody
   }
   else {
     console.log("requesting it!")
     var articleBody;
     var xhttp = new XMLHttpRequest();
     aylienUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + this.apiUrl + "?show-fields=body";
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
     this.articleBody = articleBody;
     return this.articleBody
   }
 };

 exports.Article = Article;
})(this);

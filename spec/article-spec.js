function testArticleReturnsText() {
  var article = new Article("News Story", "url")

  assert.isTrue(article.returnText() === "News Story</br>url")
}

testArticleReturnsText();

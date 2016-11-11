function testArticleReturnsText() {
  var article = new Article("News Story", "url")

  assert.isTrue(article.returnTitle() === "News Story")
}

testArticleReturnsText();

function testArticleReturnsText() {
  var article = new Article("News Story")

  assert.isTrue(article.returnText() === "News Story")
}

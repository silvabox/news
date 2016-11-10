function testListsArticles() {
  var list = new List ()

  list.addArticle("News Story")

  var actual = list.returnArticles()[0].returnText()
  assert.isTrue(actual === "News Story")
}

testListsArticles();

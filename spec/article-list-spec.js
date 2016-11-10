function testListsArticles() {
  var list = new List ()

  list.addArticle("List of Articles")

  var actual = list.returnArticles[0].returnText()
  assert.isTrue(actual === "List of Articles")
}

testListsArticles();

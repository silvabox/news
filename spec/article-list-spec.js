function testListsArticles() {
  list = setUpCreateList();

  var actual = list.returnArticles()[0].returnTitle()
  assert.isTrue(actual === "News Story")
}

testListsArticles();

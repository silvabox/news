function testListsArticles() {
  articlegetter = new ArticleGetter();
  newarticle = new Article ('News Story', "http://url")
  articlegetter.getArticles = function () {
    return [newarticle];
  }
  list = new List (articlegetter);

  var actual = list.returnArticles()[0].returnText()
  assert.isTrue(actual === "News Story</br>http://url")
}

testListsArticles();

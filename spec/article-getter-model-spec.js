function testGetterModel() {
  articlegetter = new ArticleGetter();
  newarticle = new Article ('new story', "http://url")
  articlegetter.getArticles = function () {
    return [newarticle];
  }
  list = new List (articlegetter);
  articlecontroller = new ArticleController(list);

  appdiv = document.createElement("div");
  appdiv.id = "app";
  document.body.appendChild(appdiv)
  articlecontroller.insertHTML();
  modifiedelement = document.getElementById('app').innerHTML;
  expected = '<ul><li><div>new story<br>http://url</div></li></ul>'
  assert.isTrue(modifiedelement === expected )

}

testGetterModel();

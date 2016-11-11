function testGetterModel() {
  articlegetter = new ArticleGetter();
  newarticle = new Article ('new story')
  articlegetter.getArticles = function () {
    return [newarticle];
  }
  list = new List (articlegetter);
  articlecontroller = new ArticleController(list);
  appdiv = document.createElement("div");
  appdiv.id = "app";
  articlecontroller.insertHTML();
  modifiedelement = getElementById('app').innerHTML;
  assert.isTrue(modifiedelement === '<ul><li><div>new story</div></li></ul>' )

}

testGetterModel();

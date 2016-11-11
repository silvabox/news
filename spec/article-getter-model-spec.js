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
  document.body.appendChild(appdiv)
  articlecontroller.insertHTML();
  modifiedelement = document.getElementById('app').innerHTML;
  console.log(document)
  assert.isTrue(modifiedelement === '<ul><li><div>new story</div></li></ul>' )

}

testGetterModel();

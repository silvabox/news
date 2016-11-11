function testGetterModel() {
  list = setUpCreateList();
  articlecontroller = new ArticleController(list);

  appdiv = document.createElement("div");
  appdiv.id = "app";
  document.body.appendChild(appdiv)
  articlecontroller.insertHTML();

  modifiedelement = document.getElementById('app').innerHTML;
  expected = '<ul><li><a href="#article/1"><div>News Story</div></a></li></ul>'
  assert.isTrue(modifiedelement === expected )

}

testGetterModel();

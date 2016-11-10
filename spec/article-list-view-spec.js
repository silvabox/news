function textArticleListViewReturnsSingle() {
  var list = new List();
  var articleListView = new ArticleListView();
  list.addArticle("Hello World");


  // var article = noteList.returnNotes()[0];
  // note.id = 1;
  //
  // var note = noteList.returnNotes()[1];
  // note.id = 2;

  var actual = articleListView.renderAll(list);
  var expected = '<ul><li><div>Hello World</div></li></ul>';

  assert.isTrue(actual === expected);
}

function testArticleListViewReturnsMultiple() {
  var list = new List();
  var articleListView = new ArticleListView();
  list.addArticle("Hello World");
  list.addArticle("Goodbye World");

  // var article = noteList.returnNotes()[0];
  // note.id = 1;
  //
  // var note = noteList.returnNotes()[1];
  // note.id = 2;

  var actual = articleListView.renderAll(list);
  var expected = '<ul><li><div>Hello World</div></li><li><div>Goodbye World</div></li></ul>';

  assert.isTrue(actual === expected);
}


textArticleListViewReturnsSingle();
testArticleListViewReturnsMultiple();

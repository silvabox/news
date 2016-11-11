function textArticleListViewReturnsSingle() {
  articlegetter = new ArticleGetter();
  newarticle = new Article ('News Story', "http://url")
  articlegetter.getArticles = function () {
    return [newarticle];
  }
  list = new List (articlegetter);
  var articleListView = new ArticleListView();


  // var article = noteList.returnNotes()[0];
  // note.id = 1;
  //
  // var note = noteList.returnNotes()[1];
  // note.id = 2;

  var actual = articleListView.renderAll(list);
  var expected = '<ul><li><div>News Story</br>http://url</div></li></ul>';

  assert.isTrue(actual === expected);
}

function testArticleListViewReturnsMultiple() {
  articlegetter = new ArticleGetter();
  newarticle = new Article ('News Story', "http://url")
  newarticle2 = new Article ('News Story', "http://url")
  articlegetter.getArticles = function () {
    return [newarticle, newarticle2];
  }
  list = new List (articlegetter);
  var articleListView = new ArticleListView();

  // var article = noteList.returnNotes()[0];
  // note.id = 1;
  //
  // var note = noteList.returnNotes()[1];
  // note.id = 2;

  var actual = articleListView.renderAll(list);
  var expected = '<ul><li><div>News Story</br>http://url</div></li><li><div>News Story</br>http://url</div></li></ul>';

  assert.isTrue(actual === expected);
}


textArticleListViewReturnsSingle();
testArticleListViewReturnsMultiple();

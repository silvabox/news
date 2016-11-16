articleGetter = new ArticleGetter();
list = new List(articleGetter);

articleController = new ArticleController(list);
articleController.insertHTML();
makeURLChangeShowArticleForCurrentPage()

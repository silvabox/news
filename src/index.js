list = new List();
articleGetter = new ArticleGetter();

console.log(articleGetter.getArticle().returnText());

list.addArticle(articleGetter.getArticle().returnText())
list.addArticle("Trump wins election")
list.addArticle("Winter is coming")



articleController = new ArticleController(list);
articleController.insertHTML();

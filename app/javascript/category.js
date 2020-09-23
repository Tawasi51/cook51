var RAKUTEN_APP_ID = "1094957104355351321";
 
// ページが切り替わる度に呼ばれます
document.addEventListener('init', function(event) {
  var page = event.target;
 
  // カテゴリ一覧画面の場合
  if (page.matches('#first-page')) {
 
  // レシピ一覧画面の場合
  } else if (page.matches('#second-page')) {
 
  // レシピ詳細画面の場合
  } else if (page.matches('#third-page')) {
 
  }
});
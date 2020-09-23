$(page).on("click", ".category", function(e) {
  // data-idで指定したカテゴリのIDを取得します
  let category_id = $(e.target).parent('ons-list-item').data("id");
  // カテゴリ名を取得します
  let categoryName = $(e.target).text();
 
  // レシピを取得するAPIのURLを設定します
  let url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20121121?applicationId=${RAKUTEN_APP_ID}&categoryId=${category_id}`;
 
  // Ajaxを実行します
  $.ajax({
    url: url,
    dataType: 'jsonp'
  })
  .then(function(data) {
    // 取得成功時の処理（後述）
  });
});
 
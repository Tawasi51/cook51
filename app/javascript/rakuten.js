let url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20121121?applicationId=${RAKUTEN_APP_ID}&categoryType=large`;
// Ajaxで取得
$.ajax({
  url: url,
  dataType: 'jsonp'
})
.then(function(data) {
  // 取得できたらOnsen UIのタグを生成します
  let ary = [];
  let categories = data.result.large;
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    ary.push(`<ons-list-item class="category" data-id="${category.categoryId}" modifier="chevron" tappable>${category.categoryName}</ons-list-item>`);
  }
  // できあがったHTMLを表示します
  $("#categories").html(ary.join(""));
});
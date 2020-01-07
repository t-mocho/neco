/* ハンバーガーボタン押下でメニューイン、アウト */
$(function() {
  $("#burger-icon").on("click", function() {
    $("#burger-menu").slideToggle();
    $("#burger-menu").toggleClass("active");
  });
});

/* メニュー押下でスライドアウト */
$(function() {
  $(".header_menu-moblie li a").on("click", function() {
    $("#burger-menu").slideToggle();
  });
});

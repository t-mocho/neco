// ナビゲーション固定
$(function() {
  var navHeight = 50;
  var $win = $(window),
    $main = $('main'),
    $nav = $('nav'),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});

// スムーズスクロール
$(function() {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
    var speed = 550; // ミリ秒
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    if ($('.is-fixed').length) {
      var headerHeight = 50;
    } else {
      var headerHeight = 100;
    }
    var position = target.offset().top - headerHeight;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});

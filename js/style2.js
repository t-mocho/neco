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

//
$(function() {
  // 指定クラス を visibility/hiddenで非表示にするよ
  $('.photo_box li').css('visibility', 'hidden');
  $(window).scroll(function() {
    var windowHeight = jQuery(window).height(),
      topWindow = jQuery(window).scrollTop();
    $('.photo_box li').each(function(i) {
      var targetPosition = jQuery(this).offset().top;
      if (topWindow > targetPosition - windowHeight + 100) {
        $(this).addClass("fadeInDown");
      }
    });
  });
});

// 画像
$(function(){
  $(".photo_box img").click(function() {
    $("#graydisplay").html($(this).prop('outerHTML'));
    $("#graydisplay").fadeIn(200);
  });
  $("#graydisplay, #graydisplay img").click(function() {
    $("#graydisplay").fadeOut(200);
  });
});

// 画像リンク無効
$(function(){
	$('.photo_box a').click(function(){
		return false;
	})
});

// 基本の記述
$(document).ready(
  function() {
    $("body").niceScroll();
  }
);

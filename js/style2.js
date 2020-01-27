jQuery(document).ready(function($) {
  //560px以上の場合
  if (window.matchMedia('(min-width: 560px)').matches) {
    // ヘッダー途中固定
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

      // スクロール位置
      $('a[href^="#"]').click(function() {
        var speed = 550; // ミリ秒
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if ($('.is-fixed').length) {
          var headerHeight = 50;
        } else {
          var headerHeight = 110;
        }
        var position = target.offset().top - headerHeight;
        $('body,html').animate({
          scrollTop: position
        }, speed, 'swing');
        return false;
      });
    });
    //560px以下の場合
  } else {
    $(function() {

      // ハンバーガーメニューアクティブ
      $(function() {
        $('#mobile_menu').click(function() {
          $(this).toggleClass('active');

          if ($(this).hasClass('active')) {
            $('.mobile_menu-burger').addClass('active'); //クラスを付与
            $('#menu').slideDown('active');
          } else {
            $('.mobile_menu-burger').removeClass('active'); //クラスを外す
            $('#menu').slideUp('active');
          }
        });
      });

      // リンク押下でメニューを消す
      $(function() {
        $('#menu li a').click(function() {
          $('.mobile_menu-burger').removeClass('active'); //クラスを外す
          $('#menu').slideUp(600);
        });
      });

    });
  };
});

// 画像スクロールしたらフェードイン
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

// 画像モーダル
$(function() {
  $(".photo_box img").click(function() {
    $("#graydisplay").html($(this).prop('outerHTML'));
    $("#graydisplay").fadeIn(200);
  });
  $("#graydisplay, #graydisplay img").click(function() {
    $("#graydisplay").fadeOut(200);
  });
});

// 画像リンク無効
$(function() {
  $('.photo_box a').click(function() {
    return false;
  })
});

/* 基本の記述
$(document).ready(
  function() {
    $("body").niceScroll();
  }
);
*/

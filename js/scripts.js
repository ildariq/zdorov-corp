    // $('select').styler();
    // $("[data-fancybox]").fancybox({});
    // $(".owl-carousel").owlCarousel();

    // Анимируем заголовок и колонку
    if ($(window).scrollTop() == 0) {
      $(".news-col").addClass("anim");
      $(".title--main").addClass("title--animate");
    } else {
      $(".news-col").css("top", "16vh");
    }

    var news = $(".news-col"); // новостная колонка
    var stopBanner = $('#stopBanner'); // точка для старта оверскролла новостной колонки
    var windowCurrentY; // координата скролла окна браузера
    var sheetCurrentY; // координата для параллельного с окном браузера скролла новостной колонки
    var lastSheetCurrentY; // текущая координата последнего блока новостной колонки
    var lastSheetCorrectY; // для корректировки координаты последнего блока новостной колонки
    console.log("Window.scrollTop = " + $(window).scrollTop());

    $(window).scroll(function() {
      // Листаем колонку паралелльно со скроллом окна
      windowCurrentY = $(this).scrollTop();
      sheetCurrentY = windowCurrentY * 2;
      $(".sheet").css("transform", "translate3d(0px, " + -sheetCurrentY + "px, 0px)");
      // Плавное исчесновение новостей и скролл к последнему экрану
      if (parseInt(windowCurrentY + $(window).height()) >= parseInt($('#stopBanner').offset().top)) {
        news.fadeOut();
      } else {
        news.fadeIn();
      }
    });

    $("a.scroll").click(function() {
      var id = $(this).attr("href");
      var pos = $(id).position().top;
      $("html, body").animate({
        scrollTop: pos
      }, 1500);
      return false;
    });
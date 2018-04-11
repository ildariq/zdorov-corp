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
    var lastBannerY = 0; // координаты последнего баннера
    console.log("Window.scrollTop = " + $(window).scrollTop());

    $(window).scroll(function() {
      // Листаем колонку паралелльно со скроллом окна
      windowCurrentY = $(this).scrollTop();
      sheetCurrentY = windowCurrentY * 2;
      if (lastBannerY == 0) {
        $(".sheet").css("transform", "translate3d(0px, " + -sheetCurrentY + "px, 0px)");
      }
      // Пролистываем колонку на последнем экране
      if (parseInt(windowCurrentY + $(window).height()) >= parseInt($('#stopBanner').offset().top)) {
        news.addClass("stopped");
      } else if (windowCurrentY == 0) {
        news.removeClass("stopped");
      }

      // Скрываем последний экран при скролле вверх
      if (lastBannerY != 0) {
        if (parseInt(windowCurrentY + $(window).height()) <= parseInt($('#stopBanner').offset().top)) {
          $("#lastBanner").css("display", "none");
          news.css("z-index", "1");
      }
    }
    });

    // Останавливаем колонку на последнем экране
    news.on('scroll', function() {
      lastSheetCurrentY = parseInt($('#lastSheet').offset().top);
      lastSheetCorrectY = lastSheetCurrentY - windowCurrentY;
      console.log("lastSheetCorrectY = " + lastSheetCorrectY);
      lastBannerY = parseInt($('#lastBanner').offset().top);
      if (lastSheetCorrectY < 0) {
        $("#lastBanner").css("display", "block");
        lastBannerY = parseInt($('#lastBanner').offset().top);
          news.css("z-index", "-1");
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
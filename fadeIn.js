window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");

var page = 1;

var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });
});

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    // this.hash => in a tag -> #test
    var target = this.hash; // var target = #test
    var $target = $(target); // $(taget); -> document.getElementById('#test');

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top, // offset() -> 선택자 위치값을 top, left형식을 반환하여줌
        },
        900,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});
setInterval(function () {
  /*console.log("현재위치" + $(window).scrollTop());
  console.log("윈도우 높이값" + $(window).height() / 2);*/
  var ele = $(".inner");
  var any = Array();

  ele.each(function (i) {
    any[i] = $(this).offset().top;
  });

  $(window).scroll(function () {
    var pos = $(window).scrollTop() + $(window).height() / 2;
    //console.log("상단위치값:" + pos);
    ele.each(function (i) {
      // 밑으로 슬라이드 했을 시
      if (pos > any[i]) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
}, 100);

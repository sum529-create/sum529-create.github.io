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

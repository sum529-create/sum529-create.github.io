(function (window, document) {
  "use strict";

  // document.getElementById ()에 $ () 를 대체
  const $toggles = document.querySelectorAll(".toggle");
  const $toggleBtn = document.getElementById("toggle-btn");

  $toggleBtn.addEventListener("click", function () {
    toggleElements();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle("on");
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove("on");
    });
  }
})(window, document);

// otherskill 이동
var element = $(".moreSkills a");
element.hide();
shown = false;

setInterval(function () {
  var position = $(window).scrollTop();
  if (position > 700 && position < 1470) {
    setTimeout(function () {
      setTimeout(function () {
        element.show();
      }, 200);
    }, 700);
  }
}, 500);

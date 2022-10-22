!(function (e) {
  AOS.init();
  window.addEventListener("scroll", function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > 0) {
      document.body.classList.add("scrolling");
    } else {
      document.body.classList.remove("scrolling");
    }
  });
  $(".navbar-toggler").on("click", function () {
    $("body").toggleClass("body-hidden");
  });
  $(".form-nice-select").niceSelect();
  $(".go-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  });
})(jQuery);

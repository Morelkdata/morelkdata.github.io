!(function (e) {
  var i,
    s = e(window),
    l = e("body"),
    a = e("#wrapper"),
    o = e("#header"),
    n = e("#footer"),
    t = e("#main"),
    r = t.children("article");
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  }),
    s.on("load", function () {
      window.setTimeout(function () {
        l.removeClass("is-preload");
      }, 100);
    }),
    "ie" == browser.name &&
      s
        .on("resize.flexbox-fix", function () {
          clearTimeout(i),
            (i = setTimeout(function () {
              a.prop("scrollHeight") > s.height()
                ? a.css("height", "auto")
                : a.css("height", "100vh");
            }, 250));
        })
        .triggerHandler("resize.flexbox-fix");
  var c = o.children("nav"),
    h = c.find("li");
  h.length % 2 == 0 &&
    (c.addClass("use-middle"), h.eq(h.length / 2).addClass("is-middle"));
  var d = !1;
  if (
    ((t._show = function (e, i) {
      var a = r.filter("#" + e);
      if (0 != a.length) {
        if (d || (void 0 !== i && !0 === i)) {
          l.addClass("is-switching"),
            l.addClass("is-article-visible"),
            r.removeClass("active"),
            o.hide(),
            n.hide(),
            t.show(),
            a.show(),
            a.addClass("active"),
            (d = !1),
            setTimeout(
              function () {
                l.removeClass("is-switching");
              },
              i ? 1e3 : 0
            );
          return;
        }
        if (((d = !0), l.hasClass("is-article-visible"))) {
          var c = r.filter(".active");
          c.removeClass("active"),
            setTimeout(function () {
              c.hide(),
                a.show(),
                setTimeout(function () {
                  a.addClass("active"),
                    s.scrollTop(0).triggerHandler("resize.flexbox-fix"),
                    setTimeout(function () {
                      d = !1;
                    }, 325);
                }, 25);
            }, 325);
        } else
          l.addClass("is-article-visible"),
            setTimeout(function () {
              o.hide(),
                n.hide(),
                t.show(),
                a.show(),
                setTimeout(function () {
                  a.addClass("active"),
                    s.scrollTop(0).triggerHandler("resize.flexbox-fix"),
                    setTimeout(function () {
                      d = !1;
                    }, 325);
                }, 25);
            }, 325);
      }
    }),
    (t._hide = function (e) {
      var i = r.filter(".active");
      if (l.hasClass("is-article-visible")) {
        if (
          (void 0 !== e && !0 === e && history.pushState(null, null, "#"), d)
        ) {
          l.addClass("is-switching"),
            i.removeClass("active"),
            i.hide(),
            t.hide(),
            n.show(),
            o.show(),
            l.removeClass("is-article-visible"),
            (d = !1),
            l.removeClass("is-switching"),
            s.scrollTop(0).triggerHandler("resize.flexbox-fix");
          return;
        }
        (d = !0),
          i.removeClass("active"),
          setTimeout(function () {
            i.hide(),
              t.hide(),
              n.show(),
              o.show(),
              setTimeout(function () {
                l.removeClass("is-article-visible"),
                  s.scrollTop(0).triggerHandler("resize.flexbox-fix"),
                  setTimeout(function () {
                    d = !1;
                  }, 325);
              }, 25);
          }, 325);
      }
    }),
    r.each(function () {
      var i = e(this);
      e('<div class="close">Close</div>')
        .appendTo(i)
        .on("click", function () {
          location.hash = "";
        }),
        i.on("click", function (e) {
          e.stopPropagation();
        });
    }),
    l.on("click", function (e) {
      l.hasClass("is-article-visible") && t._hide(!0);
    }),
    s.on("keyup", function (e) {
      27 === e.keyCode && l.hasClass("is-article-visible") && t._hide(!0);
    }),
    s.on("hashchange", function (e) {
      "" == location.hash || "#" == location.hash
        ? (e.preventDefault(), e.stopPropagation(), t._hide())
        : r.filter(location.hash).length > 0 &&
          (e.preventDefault(),
          e.stopPropagation(),
          t._show(location.hash.substr(1)));
    }),
    "scrollRestoration" in history)
  )
    history.scrollRestoration = "manual";
  else {
    var f = 0,
      v = 0,
      u = e("html,body");
    s.on("scroll", function () {
      (f = v), (v = u.scrollTop());
    }).on("hashchange", function () {
      s.scrollTop(f);
    });
  }
  t.hide(),
    r.hide(),
    "" != location.hash &&
      "#" != location.hash &&
      s.on("load", function () {
        t._show(location.hash.substr(1), !0);
      });
})(jQuery);
let name = document.getElementById("name"),
  email = document.getElementById("email"),
  message = document.getElementById("message"),
  reset_click = document.getElementById("reset_click");
reset_click.addEventListener("click", () => {
  (name.value = ""), (email.value = ""), (message.value = "");
});

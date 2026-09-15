// Minimal progressive-enhancement: show a "back to top" button once the
// reader has scrolled past the first screen. No frameworks, no build step.
(function () {
  var btn = document.querySelector(".back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

// Sticky table of contents for long content pages (see _layouts/page.html).
// Builds a heading list from h2/h3 inside .page, wires scroll-spy and
// smooth-scroll, and inserts it into #toc-sidebar when present.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.getElementById("toc-sidebar");
    if (!sidebar) return;

    var page = document.querySelector(".page");
    if (!page) return;

    var headings = Array.prototype.slice.call(page.querySelectorAll("h2, h3"));
    if (!headings.length) return;

    var usedSlugs = {};
    function slugify(text) {
      var base = text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "") || "section";
      var slug = base;
      var n = 2;
      while (usedSlugs[slug]) {
        slug = base + "-" + n;
        n++;
      }
      usedSlugs[slug] = true;
      return slug;
    }

    var list = document.createElement("ul");
    list.className = "toc-list";
    var linkByHeadingId = {};

    headings.forEach(function (heading) {
      if (!heading.id) {
        heading.id = slugify(heading.textContent);
      } else {
        usedSlugs[heading.id] = true;
      }

      var item = document.createElement("li");
      if (heading.tagName === "H3") {
        item.className = "toc-sub";
      }

      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var headerEl = document.querySelector(".site-header");
        var offset = (headerEl ? headerEl.offsetHeight : 0) + 16;
        var top = heading.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
        history.pushState(null, "", "#" + heading.id);
      });

      item.appendChild(link);
      list.appendChild(item);
      linkByHeadingId[heading.id] = link;
    });

    sidebar.appendChild(list);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkByHeadingId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.keys(linkByHeadingId).forEach(function (id) {
              linkByHeadingId[id].classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  });
})();

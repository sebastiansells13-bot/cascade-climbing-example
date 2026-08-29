/**
 * Class schedule day filter. Server-rendered list (each row carries
 * data-day) — this script just shows/hides rows and toggles the selected
 * button state. No re-fetch, no re-render, just display:none toggling.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var filterEl = document.getElementById("day-filter");
    if (!filterEl) return; // not on the classes page

    filterEl.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-day]");
      if (!btn) return;

      filterEl.querySelectorAll("button").forEach(function (b) {
        b.classList.remove("selected");
      });
      btn.classList.add("selected");

      var day = btn.dataset.day;
      document.querySelectorAll("#class-list [data-day]").forEach(function (row) {
        row.style.display = day === "all" || row.dataset.day === day ? "" : "none";
      });
    });
  });
})();

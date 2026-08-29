/**
 * Monthly/annual pricing toggle. Server-rendered price elements carry both
 * values as data attributes (data-monthly, data-annual) — this script just
 * swaps which one is displayed, no recalculation needed since both prices
 * are set business logic, not derived.
 */
(function () {
  "use strict";

  function setBilling(isAnnual) {
    document.querySelectorAll("[data-price]").forEach(function (el) {
      var value = isAnnual ? el.dataset.annual : el.dataset.monthly;
      el.textContent = "$" + value;
    });
    document.querySelectorAll("[data-billing-note]").forEach(function (el) {
      el.textContent = isAnnual ? "Billed annually" : "Billed monthly";
    });

    var monthlyLabel = document.getElementById("label-monthly");
    var annualLabel = document.getElementById("label-annual");
    var switchEl = document.getElementById("billing-switch");
    if (!switchEl) return;

    switchEl.setAttribute("aria-checked", String(isAnnual));
    monthlyLabel.classList.toggle("active", !isAnnual);
    annualLabel.classList.toggle("active", isAnnual);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var switchEl = document.getElementById("billing-switch");
    if (!switchEl) return; // not on the membership page

    switchEl.addEventListener("click", function () {
      var isAnnual = switchEl.getAttribute("aria-checked") === "true";
      setBilling(!isAnnual);
    });

    setBilling(false);
  });
})();

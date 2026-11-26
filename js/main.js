/* Pfoten & Poesie – kleine Ergänzungen. Die Seite funktioniert auch ohne JavaScript. */
(function () {
  "use strict";

  var ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Countdown bis zum Einlass */
  var countdown = document.querySelector("[data-countdown]");
  if (countdown) {
    var ziel = new Date(countdown.getAttribute("data-countdown")).getTime();
    var felder = {
      tage: countdown.querySelector("[data-tage]"),
      stunden: countdown.querySelector("[data-stunden]"),
      minuten: countdown.querySelector("[data-minuten]"),
      sekunden: countdown.querySelector("[data-sekunden]")
    };
    var zweistellig = function (n) { return (n < 10 ? "0" : "") + n; };
    var tick = function () {
      var rest = Math.max(0, ziel - Date.now());
      var s = Math.floor(rest / 1000);
      if (felder.tage) felder.tage.textContent = Math.floor(s / 86400);
      if (felder.stunden) felder.stunden.textContent = zweistellig(Math.floor((s % 86400) / 3600));
      if (felder.minuten) felder.minuten.textContent = zweistellig(Math.floor((s % 3600) / 60));
      if (felder.sekunden) felder.sekunden.textContent = zweistellig(s % 60);
    };
    tick();
    setInterval(tick, 1000);
  }

  /* Ticketformular: Danke-Meldung statt Versand (Studienprojekt) */
  var formular = document.querySelector("[data-ticketformular]");
  var danke = document.getElementById("danke");
  if (formular && danke) {
    formular.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = formular.querySelector("#name");
      var hund = formular.querySelector("#hundename");
      var text = "Danke" + (name && name.value ? ", " + name.value.trim() : "") + "! ";
      text += hund && hund.value ? "Wir freuen uns auf dich und " + hund.value.trim() + ". " : "Wir freuen uns auf dich. ";
      text += "Da dies ein Studienprojekt ist, wurde nichts gebucht und keine Daten wurden gesendet.";
      danke.querySelector("p").textContent = text;
      danke.hidden = false;
      danke.focus();
      formular.reset();
    });
  }

  /* Eye Candy: Ticketkarten kippen leicht in den Raum */
  if (!ruhig && window.matchMedia("(hover: hover)").matches) {
    var karten = document.querySelectorAll("[data-tilt]");
    Array.prototype.forEach.call(karten, function (karte) {
      karte.addEventListener("mousemove", function (e) {
        var r = karte.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        karte.style.transform = "rotateY(" + (x * 12).toFixed(2) + "deg) rotateX(" + (-y * 12).toFixed(2) + "deg) translateZ(10px)";
      });
      karte.addEventListener("mouseleave", function () {
        karte.style.transform = "";
      });
    });
  }
})();

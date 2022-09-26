(function () {
  "use strict";

  window.onload = function () {
    shuffleDoodle();
  };

  function shuffleDoodle() {
    const randomNumber = Math.trunc(Math.random() * 4);
    const doodleId = randomNumber + 1;
    const fileName = "img/doodles/doodle" + doodleId.toString() + ".png";
    const doodleImage = document.getElementById("index-page-doodle");
    doodleImage.src = fileName;
  }
})();

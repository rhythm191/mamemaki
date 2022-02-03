(function () {
  let soyImg = document.createElement("img");
  soyImg.src = chrome.runtime.getURL(`images/soy.png`);
  soyImg.addEventListener("click", handleHello);

  document.querySelector("body").append(soyImg);
})();

function handleHello() {
  window.alert("hello soy");
}

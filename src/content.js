(function () {
  const mamemakiMessage = document.getElementById("mamemaki-message");
  if (mamemakiMessage !== null) {
    return;
  }

  // メッセージを表示
  const message = document.createElement("p");
  message.id = "mamemaki-message";
  message.innerHTML = "豆まきモードです。ESCで終了します。";
  message.style.position = "fixed";
  message.style.right = 0;
  message.style.top = 0;
  message.style.padding = "8px 8px";
  message.style.margin = 0;
  message.style.border = "1px solid #000";
  message.style.background = "#fff";
  message.style.font = `16px sans-serif;`;
  message.style.zIndex = 2300;

  document.querySelector("body").append(message);
})();

document.body.addEventListener("click", function (event) {
  //座標を取得する
  var soyX = event.pageX; //X座標
  var soyY = event.pageY; //Y座標

  console.log(soyX + " " + soyY + " ");

  let soyImg = document.createElement("img");
  soyImg.src = chrome.runtime.getURL(`images/soy.png`);
  soyImg.style.position = "absolute";
  soyImg.style.left = `${soyX}px`;
  soyImg.style.top = `${soyY}px`;
  soyImg.style.width = "20px";
  soyImg.style.height = "20px";

  soyImg.addEventListener("click", handleHello);

  document.querySelector("body").append(soyImg);
});

function handleHello() {
  window.alert("hello soy");
}

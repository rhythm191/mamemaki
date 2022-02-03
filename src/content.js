(function () {
  if (document.getElementById("mamemaki-wrapper") !== null) {
    return;
  }

  // 豆まきの土台を表示
  const wapper = document.createElement("div");
  wapper.id = "mamemaki-wrapper";
  wapper.style.position = "fixed";
  wapper.style.left = 0;
  wapper.style.top = 0;
  wapper.style.width = "100vw";
  wapper.style.height = "100vh";
  wapper.style.margin = 0;
  wapper.style.padding = 0;
  wapper.style.zIndex = 2323;

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

  wapper.append(message);

  // クリック時に豆まきをする
  wapper.addEventListener("click", function (event) {
    var soyX = event.pageX; //X座標
    var soyY = event.pageY; //Y座標

    let soyImg = document.createElement("img");
    soyImg.src = chrome.runtime.getURL(`images/soy.png`);
    soyImg.style.position = "absolute";
    soyImg.style.left = `${soyX}px`;
    soyImg.style.top = `${soyY}px`;
    soyImg.style.width = "20px";
    soyImg.style.height = "20px";

    wapper.append(soyImg);
  });

  document.querySelector("body").append(wapper);
})();

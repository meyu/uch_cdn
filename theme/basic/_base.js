//適用於 Bootstrap v4.1.3

var js_4_bootstrap = document.getElementById("js_4_bootstrap");

var popperJS = document.createElement("script");
popperJS.type = "application/javascript";
popperJS.src = "https://www.uch.edu.tw/cdn/js/popper/popper-1.14.7.min.js";
js_4_bootstrap.appendChild(popperJS);

var bootstrapJS = document.createElement("script");
bootstrapJS.type = "application/javascript";
bootstrapJS.src =
  "https://www.uch.edu.tw/cdn/js/bootstrap/bootstrap-4.3.1.min.js";
js_4_bootstrap.appendChild(bootstrapJS);

var fontawesomeJS = document.createElement("script");
fontawesomeJS.type = "application/javascript";
fontawesomeJS.src =
  "https://www.uch.edu.tw/cdn/js/font_awesome/fontawesome-5.7.2.js";
js_4_bootstrap.appendChild(fontawesomeJS);

//執行於頁面顯示時
function onpageshow() {}

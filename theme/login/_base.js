﻿//適用於 Bootstrap v4.1.0

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

//執行於頁面顯示時
function onpageshow() {}

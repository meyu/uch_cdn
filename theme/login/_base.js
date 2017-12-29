//適用於 Bootstrap v4.0.0-beta.2

var js_4_bootstrap = document.getElementById("js_4_bootstrap");

var popperJS = document.createElement("script");
popperJS.type = "application/javascript";
popperJS.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js";
js_4_bootstrap.appendChild(popperJS);

var bootstrapJS = document.createElement("script");
bootstrapJS.type = "application/javascript";
bootstrapJS.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js";
js_4_bootstrap.appendChild(bootstrapJS);

//執行於頁面顯示時
function onpageshow() {

}
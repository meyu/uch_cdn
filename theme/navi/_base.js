//適用於 Bootstrap v4.0.0

var js_4_bootstrap = document.getElementById("js_4_bootstrap");

var popperJS = document.createElement("script");
popperJS.type = "application/javascript";
popperJS.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
js_4_bootstrap.appendChild(popperJS);

var bootstrapJS = document.createElement("script");
bootstrapJS.type = "application/javascript";
bootstrapJS.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
js_4_bootstrap.appendChild(bootstrapJS);

var fontawesomeJS = document.createElement("script");
fontawesomeJS.type = "application/javascript";
fontawesomeJS.src = "https://use.fontawesome.com/releases/v5.0.8/js/all.js";
js_4_bootstrap.appendChild(fontawesomeJS);


//執行於頁面顯示時
function onpageshow() {

   
    // 產生資訊圖標
    var logo_uch = document.getElementById("logo_uch");
    var site_user_contact = document.getElementById("site_user_contact");
    var site_user_signout = document.getElementById("site_user_signout");
    logo_uch.innerHTML = "<span class='icon icon-uchlogo'></span>";
    site_user_contact.innerHTML = "<i class='far fa-comments fa-fw'></i><span>聯絡我們</span>";
    site_user_signout.innerHTML = "<i class='fas fa-sign-out-alt fa-fw'></i><span>登出</span>";

}


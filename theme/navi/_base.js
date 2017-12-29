//適用於 Bootstrap v4.0.0-beta.3

var js_4_bootstrap = document.getElementById("js_4_bootstrap");

var popperJS = document.createElement("script");
popperJS.type = "application/javascript";
popperJS.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
js_4_bootstrap.appendChild(popperJS);

var bootstrapJS = document.createElement("script");
bootstrapJS.type = "application/javascript";
bootstrapJS.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js";
js_4_bootstrap.appendChild(bootstrapJS);


//執行於頁面顯示時
function onpageshow() {

   
    // 產生資訊圖標
    var logo_uch = document.getElementById("logo_uch");
    var site_user_contact = document.getElementById("site_user_contact");
    var site_user_signout = document.getElementById("site_user_signout");
    logo_uch.innerHTML = "<span class='icon icon-uchlogo'></span>";
    site_user_contact.innerHTML = "<i class='material-icons'>info_outline</i><span>聯絡我們</span>";
    site_user_signout.innerHTML = "<i class='material-icons'>power_settings_new</i><span>登出</span>";

}


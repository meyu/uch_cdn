//適用於 Bootstrap v4.1.0

var js_4_bootstrap = document.getElementById("js_4_bootstrap");

var popperJS = document.createElement("script");
popperJS.type = "application/javascript";
popperJS.src = "https://www.uch.edu.tw/cdn/js/popper/popper-1.14.0.min.js";
js_4_bootstrap.appendChild(popperJS);

var bootstrapJS = document.createElement("script");
bootstrapJS.type = "application/javascript";
bootstrapJS.src = "https://www.uch.edu.tw/cdn/js/bootstrap/bootstrap-4.1.0.min.js";
js_4_bootstrap.appendChild(bootstrapJS);

var fontawesomeJS = document.createElement("script");
fontawesomeJS.type = "application/javascript";
fontawesomeJS.src = "https://www.uch.edu.tw/cdn/js/font_awesome/fontawesome-5.0.10.js";
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

    /////////////////////////////
    // 端午主題
    /////////////////////////////
    var site_info_header = document.getElementById("site_info_header");
    var site_title = document.getElementById("site_title");
    var zongzi = document.createElement("img");
    var boat = document.createElement("img");

    var rr = Math.floor((Math.random() * 100) + 1);

    // 粽子無字
    if (rr < 30) {
        site_info_header.style.backgroundColor = "#FBB03B";
        logo_uch.innerHTML = ""
        zongzi.src = "/rise.gif";
        zongzi.style.position = "absolute";
        zongzi.style.top = "-10px";
        zongzi.style.left = "-25px";
        zongzi.style.height = "110px";
        logo_uch.appendChild(zongzi);
    }

    // 粽子有字
    if (rr >= 30 && rr < 60) {
        site_info_header.style.backgroundColor = "#FBB03B";
        logo_uch.innerHTML = ""
        zongzi.src = "/sese2.gif";
        zongzi.style.position = "absolute";
        zongzi.style.top = "-5px";
        zongzi.style.left = "-15px";
        zongzi.style.height = "100px";
        logo_uch.appendChild(zongzi);
    }

    // 龍舟
    if (rr >= 60) {
        site_info_header.style.backgroundColor = "#29ABE2";
        boat.id = "dragon_boat"
        boat.src = "/boat.gif";
        boat.style.position = "absolute";
        boat.style.top = "8px";
        boat.style.zIndex = -10;
        boat.style.height = "90px";
        site_title.appendChild(boat);
    }
        
}


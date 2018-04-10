//適用於 Bootstrap v4.0.0

var js_4_bootstrap = document.getElementById("js_4_bootstrap");

var popperJS = document.createElement("script");
popperJS.type = "application/javascript";
popperJS.src = "https://www.uch.edu.tw/cdn/js/popper/popper-1.12.9.min.js";
js_4_bootstrap.appendChild(popperJS);

var bootstrapJS = document.createElement("script");
bootstrapJS.type = "application/javascript";
bootstrapJS.src = "https://www.uch.edu.tw/cdn/js/bootstrap/bootstrap-4.0.0.min.js";
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

    var rr = Math.floor((Math.random() * 100) + 1);
    console.log(rr);
    if (rr % 4 == 0) {
        // 冬季
        $('body').append('<link rel="stylesheet" type="text/css" href="//aps4.uch.edu.tw/cdn/theme/navi/20171201.winter.css">')
    }

    if (rr % 3 == 0) {
        //戴個小葉子
        var hat = document.createElement("img");
        hat.src = "https://thumbs.gfycat.com/ReasonableDizzyBlackandtancoonhound-max-1mb.gif";
        hat.style.position = "absolute";
        hat.style.top = "0px";
        hat.style.left = "15px";
        hat.style.width = "100px";
        document.getElementById("logo_uch").appendChild(hat);
    } 

    if (rr % 2 == 0) {
        //來個雙背景
        var site_info_header = document.getElementById("site_info_header");
        site_info_header.style.backgroundImage = "url('//aps4.uch.edu.tw/cdn/images/f_leaf1270.png')";
        site_info_header.style.backgroundPosition = "center";
        site_info_header.style.bac = "center";
    }

    if (rr % 5 == 0)    {
        //來個全景圖
        var sponge = document.createElement("img");
        sponge.src = "//aps4.uch.edu.tw/cdn/images/f_leaf1270.png";
        sponge.style.width = "300px";
        sponge.style.position = "fixed";
        sponge.style.bottom = "5%";
        sponge.style.right = "5%";
        var mainn = document.getElementsByTagName("main")
        mainn[0].appendChild(sponge);
    }

}


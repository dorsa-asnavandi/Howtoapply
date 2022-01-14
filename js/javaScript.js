function typingMode2(id, speed, stop) {
    x = document.getElementById(id).innerHTML;
    count = 0;
    dir = 0;
    intervalVar = setInterval(function () {
        if (dir == 0) {
            count++;
        } else {
            count--;
        }
        document.getElementById(id).innerHTML = "|" + x.substr(0, count);
        if (count > x.length) {
            setTimeout(function () {
                dir = 1;
            }, stop);
        }
        if (count < 0) {
            dir = 0;
        }
    }, speed);
}

function cheshmak(id, speed) {
    c = 0;
    cheshmakObj = document.getElementById(id);
    setInterval(function () {
        if (c == 0) {
            cheshmakObj.classList.remove('hide');
            cheshmakObj.classList.add('show');
            c = 1;
        } else {
            cheshmakObj.classList.remove('show');
            cheshmakObj.classList.add('hide');
            c = 0;
        }
    }, speed);
}

typingMode2('heading-title', 100, 2000);
cheshmak('cheshmak-txt', 2000);

function formvalidate() {
    x = document.forms["myform"]["fname"].value;
    len = x.length;
    if (len < 3) {
        fname.style.borderBottom = "1px solid red";
    }
    else {
        fname.style.borderBottom = "1px solid green";
    }
    y = document.forms["myform"]["fmail"].value;
    vemail = y.includes("@");
    indexdot = y.lastIndexOf(".");
    indexmail = y.indexOf("@");
    if (vemail == false || indexdot < indexmail) {
        fmail.style.borderBottom = "1px solid red";
    }
    else {
        fmail.style.borderBottom = "1px solid green";
    }
}

$(document).ready(function () {
    clickCounter = 0;
    $('#light-state').click(function () {
        if (clickCounter % 2 == 0) {
            $(this).get(0).src = "video/ezgif-5-a79d732618.mp4";
        }
        else {
            $(this).get(0).src = "video/ezgif-5-8f399c0a18.mp4";
        }
        if (clickCounter % 2 == 0) {
            $(this).get(0).play();
            $(".start-bg").delay(2000).fadeIn(function () {
                $(".start-bg").addClass("dark-theme-learn");
                $(".content-start").addClass("dark-theme-content");
                $(".need-bg").addClass("dark-theme-need");
                $(".need-box").addClass("dark-theme-needbox");
                $(".blog-bg").addClass("dark-theme-blog");
                $(".heading-blog-post").addClass("dark-theme-content");
                $(".detail-blog-post").addClass("dark-theme-content");
                $(".overlay-header").addClass("dark-theme-header");
            });
        } else {
            $(this).get(0).play();
            $(".start-bg").delay(1000).fadeIn(function () {
                $(".start-bg").removeClass("dark-theme-learn");
                $(".content-start").removeClass("dark-theme-content");
                $(".need-bg").removeClass("dark-theme-need");
                $(".need-box").removeClass("dark-theme-needbox");
                $(".blog-bg").removeClass("dark-theme-blog");
                $(".heading-blog-post").removeClass("dark-theme-content");
                $(".detail-blog-post").removeClass("dark-theme-content");
                $(".overlay-header").removeClass("dark-theme-header");
            });
        }
        clickCounter++;
    });
});
document.getElementsByClassName('overlay-header').item(0).onmouseover = function () {
    document.getElementsByClassName('overlay-header').item(0).classList.add('overlay-header-hover');
};
document.getElementsByClassName('overlay-header').item(0).onmouseleave = function () {
    document.getElementsByClassName('overlay-header').item(0).classList.remove('overlay-header-hover');
};
document.getElementsByClassName('closeback').item(0).onclick = function () {
    document.getElementsByClassName('overlay-header').item(0).classList.remove('overlay-header-hover');
};
counterClick = 0;
document.getElementsByClassName('toggle-button-nav').item(0).onclick = function () {
    if (counterClick%2 == 0) {
        document.getElementsByClassName('toggle-button-nav').item(0).classList.add('change');
        $(".navbar-item-style").slideDown(500);
    } else {
        document.getElementsByClassName('toggle-button-nav').item(0).classList.remove('change');
        $(".navbar-item-style").slideUp(500);
    }
    counterClick++;
};
document.getElementsByTagName('body').item(0).onresize=function () {
    if(document.getElementsByTagName('body').item(0).clientWidth >560){
        $(".navbar-item-style").slideDown(500);
    }
};
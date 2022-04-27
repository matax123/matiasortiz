color1 = "rgb(28, 101, 140)"
color2 = "rgb(57, 138, 185)"
color3 = "rgb(216, 210, 203)"
color4 = "rgb(238, 238, 238)"

new WOW().init()

var imgCount;
var loadedCounter = 0
function imgLoaded() {
    loadedCounter++
    if (loadedCounter == imgCount) {
        console.log("all images loaded")
        $("#loading").fadeOut(1000);
        $("body").removeClass("preload");
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        var mobileURL = "https://api.whatsapp.com/send/?phone=56991353540&text=";
        var pcURL = "https://web.whatsapp.com/send?phone=56991353540&text=";

        if (isMobile) {
            document.getElementById("telefono").href = mobileURL;
        } else {
            document.getElementById("telefono").href = pcURL;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var imgs = document.querySelectorAll(".projectImage")
    console.log(imgs)
    imgCount = imgs.length

    for (var i = 0; i < imgs.length; i++) {
        console.log("new img onload")
        imgs[i].onload = function (e) {
            console.log(e.target)
            imgLoaded()
        }
    }
})
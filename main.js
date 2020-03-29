window.onscroll = function() { followHeader() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function followHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function myFunction() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 93) {
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}


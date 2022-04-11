var nav_bar_redirects_checkbox = document.getElementById("hamburger_menu_toggle");
var redirect_blocker = document.getElementById("out_of_bound_blocker");
nav_bar_redirects_checkbox.addEventListener("click", function () {
    if (nav_bar_redirects_checkbox.checked) {
        redirect_blocker.style.display = "flex";
    }
    else {
        redirect_blocker.style.display = "none";
    }
});
redirect_blocker.addEventListener("click", function () {
    nav_bar_redirects_checkbox.checked = false;
    redirect_blocker.style.display = "none";
});

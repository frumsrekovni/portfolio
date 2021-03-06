const nav_bar = document.getElementsByTagName("nav")[0];
const nav_bar_redirects_checkbox = document.getElementById("hamburger_menu_toggle");
const redirect_blocker = document.getElementById("out_of_bound_blocker");
const bgColor = document.getElementById("bgcolor");
const midBgColor = document.getElementById("bgcolormid");
const leftbarbgColor = document.getElementById("leftbar");
const rightbarbgColor = document.getElementById("rightbar");
function changenavbg() {
    const hiddenpickers = document.getElementsByClassName("hiddenpicker");
    for (let i = 0; i < hiddenpickers.length; i++) {
        hiddenpickers[i].style.display = "flex";
    }
}
nav_bar_redirects_checkbox.addEventListener("click", () => {
    if (nav_bar_redirects_checkbox.checked) {
        redirect_blocker.style.display = "flex";
    }
    else {
        redirect_blocker.style.display = "none";
    }
});
redirect_blocker.addEventListener("click", () => {
    nav_bar_redirects_checkbox.checked = false;
    redirect_blocker.style.display = "none";
});
function copyEmail() {
    navigator.clipboard.writeText("joshua.backstrom@gmail.com");
    const alertbox = document.createElement("div");
    alertbox.classList.add("copy_alert");
    alertbox.innerHTML = "Email Copied!";
    setTimeout(function () { alertbox.parentNode.removeChild(alertbox); }, 1000);
    document.body.appendChild(alertbox);
}
bgColor.addEventListener("input", function () {
    nav_bar.style.background = "linear-gradient(90deg, " + this.value + " 5%, " + leftbarbgColor.value + " 30%, " + rightbarbgColor.value + " 70%, " + this.value + " 95%)";
    document.body.style.background = "linear-gradient(180deg, " + this.value + " 0%, " + midBgColor.value + " 15%," + midBgColor.value + " 85%," + this.value + " 100%)";
});
midBgColor.addEventListener("input", function () {
    document.body.style.background = "linear-gradient(180deg, " + bgColor.value + " 0%, " + this.value + " 15%," + this.value + " 85%," + bgColor.value + " 100%)";
});
leftbarbgColor.addEventListener("input", function () {
    nav_bar.style.background = "linear-gradient(90deg, " + bgColor.value + " 5%, " + this.value + " 30%, " + rightbarbgColor.value + " 70%, " + bgColor.value + " 95%)";
});
rightbarbgColor.addEventListener("input", function () {
    nav_bar.style.background = "linear-gradient(90deg, " + bgColor.value + " 5%, " + leftbarbgColor.value + " 30%, " + this.value + " 70%, " + bgColor.value + " 95%)";
});

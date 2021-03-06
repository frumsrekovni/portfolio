const nav_bar = document.getElementsByTagName("nav")[0];
const nav_bar_redirects_checkbox = document.getElementById("hamburger_menu_toggle") as HTMLInputElement;
const redirect_blocker = document.getElementById("out_of_bound_blocker");
const bgColor = document.getElementById("bgcolor") as HTMLInputElement
const midBgColor = document.getElementById("bgcolormid") as HTMLInputElement
const leftbarbgColor = document.getElementById("leftbar") as HTMLInputElement
const rightbarbgColor = document.getElementById("rightbar") as HTMLInputElement

function changenavbg(){
    const hiddenpickers = document.getElementsByClassName("hiddenpicker") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < hiddenpickers.length; i++) {
        hiddenpickers[i].style.display = "flex";
    }
}


nav_bar_redirects_checkbox.addEventListener("click", () => {
    if(nav_bar_redirects_checkbox.checked){
        redirect_blocker.style.display = "flex";
    }
    else{
        redirect_blocker.style.display = "none";
    }
});

redirect_blocker.addEventListener("click", () => { // If the blocker is able to be clicked it should close uncheck all checkboxes and dissappear
    nav_bar_redirects_checkbox.checked = false;
    redirect_blocker.style.display = "none";
});
function copyEmail(){
    navigator.clipboard.writeText("joshua.backstrom@gmail.com");

    const alertbox = document.createElement("div");
    alertbox.classList.add("copy_alert");
    alertbox.innerHTML = "Email Copied!";
    setTimeout(function(){alertbox.parentNode.removeChild(alertbox);},1000);
    document.body.appendChild(alertbox);
}

bgColor.addEventListener("input", function() {
    nav_bar.style.background = "linear-gradient(90deg, "+this.value+" 5%, "+leftbarbgColor.value+" 30%, "+rightbarbgColor.value+" 70%, "+this.value+" 95%)";
    document.body.style.background ="linear-gradient(180deg, "+(this as HTMLInputElement).value+" 0%, "+midBgColor.value+" 15%,"+midBgColor.value+" 85%,"+(this as HTMLInputElement).value+" 100%)";
});
midBgColor.addEventListener("input", function() {
    document.body.style.background ="linear-gradient(180deg, "+bgColor.value+" 0%, "+(this as HTMLInputElement).value+" 15%,"+(this as HTMLInputElement).value+" 85%,"+bgColor.value+" 100%)";
});

leftbarbgColor.addEventListener("input", function() {
    nav_bar.style.background = "linear-gradient(90deg, "+bgColor.value+" 5%, "+this.value+" 30%, "+rightbarbgColor.value+" 70%, "+bgColor.value+" 95%)";
});
rightbarbgColor.addEventListener("input", function() {
    nav_bar.style.background = "linear-gradient(90deg, "+bgColor.value+" 5%, "+leftbarbgColor.value+" 30%, "+this.value+" 70%, "+bgColor.value+" 95%)";
});
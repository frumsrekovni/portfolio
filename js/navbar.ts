const nav_bar_redirects_checkbox = document.getElementById("hamburger_menu_toggle") as HTMLInputElement;
const redirect_blocker = document.getElementById("out_of_bound_blocker");

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
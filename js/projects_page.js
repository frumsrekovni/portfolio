var pomodoro_timer_project_element = document.getElementById("pomodoro_timer_project");
var portfolio_project_element = document.getElementById("portfolio_project");
var skywriter_project_element = document.getElementById("skywriter_project");
var pomodoro_timer_project_toggle = document.getElementById("pomodoro_timer_project_toggle");
var portfolio_project_element_toggle = document.getElementById("portfolio_toggle");
var skywriter_project_element_toggle = document.getElementById("skywriter_toggle");
var active_project_blocker = document.getElementById("out_of_bound_blocker");
var all_project_checkboxes = document.getElementsByClassName("project_checkbox");
function disableAllCheckboxes() {
    for (var i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].disabled = true;
    }
}
// The repetition here is real ugly but in order make the project be able to expand and not shrink when pressed the project checkboxes unfortunately needs to disabled and handled with javascript.
pomodoro_timer_project_element.addEventListener("click", function () {
    pomodoro_timer_project_toggle.checked = true;
    active_project_blocker.style.display = "flex";
});
portfolio_project_element.addEventListener("click", function () {
    portfolio_project_element_toggle.checked = true;
    active_project_blocker.style.display = "flex";
});
skywriter_project_element.addEventListener("click", function () {
    skywriter_project_element_toggle.checked = true;
    active_project_blocker.style.display = "flex";
});
// nav_bar_redirects_checkbox.addEventListener("click", () => {
//     if(nav_bar_redirects_checkbox.checked){
//         redirect_blocker.style.display = "flex";
//     }
//     else{
//         redirect_blocker.style.display = "none";
//     }
// });
active_project_blocker.addEventListener("click", function () {
    for (var i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].checked = false;
    }
    active_project_blocker.style.display = "none";
});


const pomodoro_timer_project_element = document.getElementById("pomodoro_timer_project");
const portfolio_project_element = document.getElementById("portfolio_project");
const skywriter_project_element = document.getElementById("skywriter_project");


const pomodoro_timer_project_toggle = document.getElementById("pomodoro_timer_project_toggle") as HTMLInputElement;
const portfolio_project_element_toggle = document.getElementById("portfolio_toggle") as HTMLInputElement;
const skywriter_project_element_toggle = document.getElementById("skywriter_toggle") as HTMLInputElement;

const active_project_blocker = document.getElementById("out_of_bound_blocker");
const all_project_checkboxes = document.getElementsByClassName("project_checkbox") as HTMLCollectionOf<HTMLInputElement>;

function disableAllCheckboxes(){

    for (let i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].disabled = true;
      }
}

// The repetition here is real ugly but in order make the project be able to expand and not shrink when pressed the project checkboxes unfortunately needs to disabled and handled with javascript.
pomodoro_timer_project_element.addEventListener("click", () => {
    pomodoro_timer_project_toggle.checked = true;
    active_project_blocker.style.display = "flex";
});
portfolio_project_element.addEventListener("click", () => {
    portfolio_project_element_toggle.checked = true;
    active_project_blocker.style.display = "flex";
});
skywriter_project_element.addEventListener("click", () => {
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

active_project_blocker.addEventListener("click", () => {
    for (let i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].checked = false;
      }
    active_project_blocker.style.display = "none";
});

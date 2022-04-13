
const project_element = document.getElementById("pomodoro_timer_project");
const body_element = document.getElementsByTagName("body");
const active_project_blocker = document.getElementById("out_of_bound_blocker");
const project_toggle = document.getElementById("pomodoro_timer_project_toggle") as HTMLInputElement;


project_element.addEventListener("click", () => {
        // project_element.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/TXXjeIF7M7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        // const node = document.createElement("div");
        // node.classList.add("text_for_a_project");
        // node.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        // project_element.appendChild(node);
        project_toggle.disabled = true;
        project_toggle.checked = true;
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
    project_toggle.checked = false;
    active_project_blocker.style.display = "none";
});

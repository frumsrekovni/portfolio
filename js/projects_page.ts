
const all_project_elements = document.getElementsByClassName("a_project") as HTMLCollectionOf<Element>;
const active_project_blocker = document.getElementById("projects_out_of_bound_blocker") as HTMLElement;
const all_project_checkboxes = document.getElementsByClassName("project_checkbox") as HTMLCollectionOf<HTMLInputElement>;

// Done as soon as the page starts loading
// Disable all of these input checkboxes. A roundabout solution but they can only be checked with javascript.
// Make all projects clickable by adding event listeners.
disableAllCheckboxes()
addEventListenerToAllProjects();

function activateBlocker(){
    active_project_blocker.style.display = "flex";
}

function addEventListenerToAllProjects(){
    for (let i = 0; i < all_project_elements.length; i++) {
        all_project_elements[i].addEventListener("click", () =>{
            let projectid = all_project_elements[i].id + "_toggle";
            let projectEl = document.getElementById(projectid) as HTMLInputElement;
            projectEl.checked = true;
            all_project_elements[i].scrollIntoView({behavior: "smooth"}); 
            activateBlocker();
        });
      }
}

// disableAllCheckboxes() is executed when body tag is loaded. It disables all project checkboxes and adds event listeners to all projects.
function disableAllCheckboxes(){
    for (let i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].disabled = true;
      }
}

// When the blocker is clicked all projects should minimize(uncheck all project checkboxes)
active_project_blocker.addEventListener("click", () => {
    for (let i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].checked = false;
      }
    active_project_blocker.style.display = "none";
});
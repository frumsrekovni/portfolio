var all_project_elements = document.getElementsByClassName("a_project");
var active_project_blocker = document.getElementById("out_of_bound_blocker");
var all_project_checkboxes = document.getElementsByClassName("project_checkbox");
function activateBlocker() {
    active_project_blocker.style.display = "flex";
}
function addEventListenerToAllProjects() {
    var _loop_1 = function (i) {
        all_project_elements[i].addEventListener("click", function () {
            var projectid = all_project_elements[i].id + "_toggle";
            var projectEl = document.getElementById(projectid);
            projectEl.checked = true;
            all_project_elements[i].scrollIntoView({ behavior: "smooth" });
            activateBlocker();
        });
    };
    for (var i = 0; i < all_project_elements.length; i++) {
        _loop_1(i);
    }
}
// disableAllCheckboxes() is executed when body tag is loaded. It disables all project checkboxes and adds event listeners to all projects.
function disableAllCheckboxes() {
    for (var i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].disabled = true;
    }
    addEventListenerToAllProjects();
}
// When the blocker is clicked all projects should minimize(uncheck all project checkboxes)
active_project_blocker.addEventListener("click", function () {
    for (var i = 0; i < all_project_checkboxes.length; i++) {
        all_project_checkboxes[i].checked = false;
    }
    active_project_blocker.style.display = "none";
});

var project_element = document.getElementById("pomodoro_timer_project");
var body_element = document.getElementsByTagName("body");
project_element.addEventListener("click", function () {
    project_element.classList.add("active_project");
    project_element.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TXXjeIF7M7I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    var node = document.createElement("div");
    node.classList.add("text_for_a_project");
    node.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    project_element.appendChild(node);
});

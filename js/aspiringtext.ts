

// Changes aspiring text to a random word in the list and triggers the CSS animation
const element = document.getElementById("main_page_aspiring_text");

setInterval(_get_Random_Word, 5200);

function _get_Random_Word(){
    const aspiring_words = ['Ambitious','Aspiring', 'Aspirant','Avid','Ardent','C/C++','Dynamic','Determined','Driven','Diligent','Enthusiastic' ,'Endeavoring','Fervent','Eager','Keen','Raring','Ready','Resolved','Striving','Self-seeking','Tenacious','Typescript','Go-getting','Passionate','Python','Zealous','Wishful','Willing'];
    element.textContent = aspiring_words[Math.floor(Math.random() * aspiring_words.length)];
    element.classList.add('fadeIn_fadeOut');
};

element.onanimationend = () => {
    element.style.opacity = '0';
    element.classList.remove('fadeIn_fadeOut');
};

function copyEmail(){
    navigator.clipboard.writeText("joshua.backstrom@gmail.com");

    const alertbox = document.createElement("div");
    alertbox.classList.add("copy_alert");
    alertbox.innerHTML = "Email Copied!";
    setTimeout(function(){alertbox.parentNode.removeChild(alertbox);},1000);
    document.body.appendChild(alertbox);
}
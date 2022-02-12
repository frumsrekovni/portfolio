

// Changes aspiring text to a random word in the list and triggers the CSS animation
const element = document.getElementById("main_page_aspiring_text");

setInterval(_get_Random_Word, 5200);

function _get_Random_Word(){
    const aspiring_words = ['Aspiring','Dynamic','Enthusiastic' ,'Endeavoring','Eager','Striving','Ambitious','Diligent','Keen','Raring','Zealous','Aspirant','Wishful','Determined'];
    element.textContent = aspiring_words[Math.floor(Math.random() * aspiring_words.length)];
    element.classList.add('fadeIn_fadeOut');
};

element.onanimationend = () => {
    element.style.opacity = '0';
    element.classList.remove('fadeIn_fadeOut');
};
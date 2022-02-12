// Changes aspiring text to a random word in the list and triggers the CSS animation
var element = document.getElementById("main_page_aspiring_text");
setInterval(_get_Random_Word, 5200);
function _get_Random_Word() {
    var aspiring_words = ['Ambitious', 'Aspiring', 'Aspirant', 'Avid', 'Ardent', 'Dynamic', 'Determined', 'Driven', 'Diligent', 'Enthusiastic', 'Endeavoring', 'Fervent', 'Eager', 'Keen', 'Raring', 'Ready', 'Resolved', 'Striving', 'Self-seeking', 'Go-getting', 'Passionate', 'Zealous', 'Wishful', 'Willing'];
    element.textContent = aspiring_words[Math.floor(Math.random() * aspiring_words.length)];
    element.classList.add('fadeIn_fadeOut');
}
;
element.onanimationend = function () {
    element.style.opacity = '0';
    element.classList.remove('fadeIn_fadeOut');
};

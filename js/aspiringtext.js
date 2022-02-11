setInterval(_get_Random_Word, 5000);
// Function that return one random word from the list of words
function _get_Random_Word() {
    var aspiring_words = ['Aspiring', 'Dynamic', 'Enthusiastic', 'Endeavoring', 'Eager', 'Striving', 'Ambitious', 'Diligent', 'Keen', 'Raring', 'Zealous', 'Aspirant', 'Wishful', 'Determined'];
    var element = document.getElementById("main_page_aspiring_text");
    element.textContent = aspiring_words[Math.floor(Math.random() * aspiring_words.length)];
    return aspiring_words[Math.floor(Math.random() * aspiring_words.length)];
}
console.log(_get_Random_Word());

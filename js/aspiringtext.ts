

// Changes aspiring text to a random word in the list and triggers the CSS animation
const element = document.getElementById("main_page_aspiring_text");
const el_tvshow = document.getElementById("timeline_tv_show");
const el_game = document.getElementById("timeline_game");
const el_sport = document.getElementById("timeline_sport");

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

function _get_Random_Tv_Show(){
    const tv_shows = ['One Piece','Naruto','Xena: Warrior Princess','TaleSpin','Sailor Moon','REA','Johnny Bravo','Ed, Edd n Eddy','Samurai Jack',"Dexter's Laboratory",'Hjärnkontoret','Myror i brallan','Björnes magasin','Fångarna på fortet','The Fresh Prince of Bel-Air'];
    el_tvshow.textContent = tv_shows[Math.floor(Math.random() * tv_shows.length)];
};

function _get_Random_Game(){
    const childhood_games = ['counter-strike','battlefront','halo','runescape', 'pokemon sapphire','sherwood dungeon','battleon','guitar hero','san andreas'];
    el_game.textContent = childhood_games[Math.floor(Math.random() * childhood_games.length)];
};

function _get_Random_Sport(){
    const childhood_sports = ['swimming','football','bowling','table tennis','ice-hockey'];
    el_sport.textContent = childhood_sports[Math.floor(Math.random() * childhood_sports.length)];
};
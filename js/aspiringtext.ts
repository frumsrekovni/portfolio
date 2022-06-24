

// Changes aspiring text to a random word in the list and triggers the CSS animation
const element = document.getElementById("main_page_aspiring_text");
const el_tvshow = document.getElementById("timeline_tv_show");
const el_game = document.getElementById("timeline_game");
const el_sport = document.getElementById("timeline_sport");

setInterval(_get_Random_Word, 5200);

function _get_Random_Word(){
    const aspiring_words = ['Ambitious','Aspiring', 'Aspirant','Avid','Ardent','Back-end','C/C++','Dynamic','Determined',
    'Driven','Diligent','Enthusiastic' ,'Endeavoring','Fervent','Front-end','Eager','Keen','Raring','Ready','React','Resolved',
    'Striving','Self-seeking','Tenacious','Typescript','Go-getting','Passionate','Python','Zealous','Wishful','Willing'];
    element.textContent = aspiring_words[Math.floor(Math.random() * aspiring_words.length)];
    element.classList.add('fadeIn_fadeOut');
};

element.onanimationend = () => {
    element.style.opacity = '0';
    element.classList.remove('fadeIn_fadeOut');
};

function _get_Random_Tv_Show(){
    const tv_shows = ['One Piece','Pokemon','Naruto','Digimon','Xena: Warrior Princess','Luftens hjältar','Sailor Moon','REA','Johnny Bravo',
    'Ed, Edd n Eddy','Samurai Jack','¡Mucha Lucha!',"Dexter's Laboratory",'Hjärnkontoret','Myror i brallan','Björnes magasin',
    'Fångarna på fortet','The Fresh Prince of Bel-Air','Lloyd i rymden','Anki & Pytte',
    'Nalle har ett stort blått hus','Dinosaurs', 'Fem myror är fler än fyra elefanter','Lilla Sportspegeln',
    'Tom and Jerry','The Jetsons','The Simpsons','Looney Tunes','Taz-Mania','Cow and Chicken','I Am Weasel',
    'Billy & Mandy','Sabrina the Teenage Witch',"That's So Raven",'The Powerpuff Girls','South Park', "That '70s Show",
    'Mr. Bean','The Nanny', 'Kodnamn Grannungarna','Spy Kids','Courage the Cowardly Dog','Dastardly and Muttley','Megas XLR',
    'Fosters hem för påhittade vänner','Hi Hi Puffy AmiYumi','Scooby-Doo!','Teen Titans','Jönssonligan','Spirited Away',
    'Doktor Mugg','Nicke & Mojje','Teckenlådan','Djursjukhuset','Plus','På Spåret','Rasten','Kim Possible','Svampbob Fyrkant',
    'Wallace and Gromit','Professor Balthazar','Alfons Åberg','Pingu','Mamma Mu','Hamtaro','Piff och Puff','Inspector Gadget',
    'Amigo','Parlamentet','Richard Scarrys äventyrsvärld','Lisa','Abrakadabra','Big Brother','Zorro'];
    el_tvshow.textContent = tv_shows[Math.floor(Math.random() * tv_shows.length)];
};

function _get_Random_Game(){
    const childhood_games = ['counter-strike','battlefront','halo','runescape', 'pokemon sapphire','pokemon red','sherwood dungeon',
    'battleon','guitar hero','san andreas','tekken 3','dark rift','bio freaks','super battletank 2',"kirby's dream course",
    'super mario all-stars','super mario 64','super mario kart','zelda link to the past','donkey kong country 2','time crisis',
    'theme park world','dune','gta 2','NHL 99','fifa 99','worms armageddon','digimon world','red card','road rash jailbreak',
    'red alert','hugo 2','medal of honor','quake','warpath jurassic park',"anna kournikova's smash court tennis",'dr. mario'];
    el_game.textContent = childhood_games[Math.floor(Math.random() * childhood_games.length)];
};

function _get_Random_Sport(){
    const childhood_sports = ['swimming','football','bowling','table tennis','ice-hockey'];
    el_sport.textContent = childhood_sports[Math.floor(Math.random() * childhood_sports.length)];
};
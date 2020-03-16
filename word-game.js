var dictionary = [
    "ACT",
    "TIGER",
    "LION",
    "BEAR",
    "HAPPY",
    "JAVASCRIPT",
    "LAB",
    "MONEY",
    "KALEIDOSCOPE",
    "AIRCRAFT CARRIER",
    " Surveyor",
"Swimming Pool",

"Sword",

"Table",

"Tapestry",

"Teeth",
"Telescope"

"Television"

"Tennis racquet"

"Thermometer"

"Tiger"

"Toilet"

"Tongue"

"Torch"

"Torpedo"
    
];
var myWord;

function scramble(word) {
    return word.split('').sort(function(){ return Math.random() - 0.5 }).join('');
}

function chooseWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function printWord(word) {
    var html = "";
    for (var i = 0; i < word.length; i++) {
        html += '<li class="tile">' + word[i] + '</li>'
    }
    $('.word').html(html);
}

function startGame() {
    myWord = chooseWord();
    
    var scrambled = scramble(myWord);
    
    while (scrambled == myWord) {
        scrambled = scramble(myWord);
    }
    
    printWord(scramble(myWord));
}

$(function(){    
    startGame();
    
    $('.word').sortable({
        update: function (e, ui) {
            console.log(myWord, $('.tile').text());
            if (myWord === $('.tile').text()) {
                var playAgain = confirm("That is correct. Next word?");
                if (playAgain) {
                    startGame();
                }                    
            }
        }
    });  
});

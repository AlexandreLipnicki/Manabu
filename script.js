const kanaList = [
    {romaji: 'a', hiragana: 'あ', katakana: 'ア'},
    {romaji: 'i', hiragana: 'い', katakana: 'イ'},
    {romaji: 'u', hiragana: 'う', katakana: 'ウ'},
    {romaji: 'e', hiragana: 'え', katakana: 'エ'},
    {romaji: 'o', hiragana: 'お', katakana: 'オ'},
    {romaji: 'ka', hiragana: 'か', katakana: 'カ'},
    {romaji: 'ga', hiragana: 'が', katakana: 'ガ'},
    {romaji: 'ki', hiragana: 'き', katakana: 'キ'},
    {romaji: 'gi', hiragana: 'ぎ', katakana: 'ギ'},
    {romaji: 'ku', hiragana: 'く', katakana: 'ク'},
    {romaji: 'gu', hiragana: 'ぐ', katakana: 'グ'},
    {romaji: 'ke', hiragana: 'け', katakana: 'ケ'},
    {romaji: 'ge', hiragana: 'げ', katakana: 'ゲ'},
    {romaji: 'ko', hiragana: 'こ', katakana: 'コ'},
    {romaji: 'go', hiragana: 'ご', katakana: 'ゴ'},
    {romaji: 'sa', hiragana: 'さ', katakana: 'サ'},
    {romaji: 'za', hiragana: 'ざ', katakana: 'ザ'},
    {romaji: 'si', hiragana: 'し', katakana: 'シ'},
    {romaji: 'zi', hiragana: 'じ', katakana: 'ジ'},
    {romaji: 'su', hiragana: 'す', katakana: 'ス'},
    {romaji: 'zu', hiragana: 'ず', katakana: 'ズ'},
    {romaji: 'se', hiragana: 'せ', katakana: 'セ'},
    {romaji: 'ze', hiragana: 'ぜ', katakana: 'ゼ'},
    {romaji: 'so', hiragana: 'そ', katakana: 'ソ'},
    {romaji: 'zo', hiragana: 'ぞ', katakana: 'ゾ'},
    {romaji: 'ta', hiragana: 'た', katakana: 'タ'},
    {romaji: 'da', hiragana: 'だ', katakana: 'ダ'},
    {romaji: 'ti', hiragana: 'ち', katakana: 'チ'},
    {romaji: 'di', hiragana: 'ぢ', katakana: 'ヂ'},
    {romaji: 'tu', hiragana: 'つ', katakana: 'ツ'},
    {romaji: 'du', hiragana: 'づ', katakana: 'ヅ'},
    {romaji: 'te', hiragana: 'て', katakana: 'テ'},
    {romaji: 'de', hiragana: 'で', katakana: 'デ'},
    {romaji: 'to', hiragana: 'と', katakana: 'ト'},
    {romaji: 'do', hiragana: 'ど', katakana: 'ド'},
    {romaji: "na", hiragana: "な", katakana: "ナ"},
    {romaji: "ni", hiragana: "に", katakana: "ニ"},
    {romaji: "nu", hiragana: "ぬ", katakana: "ヌ"},
    {romaji: "ne", hiragana: "ね", katakana: "ネ"},
    {romaji: "no", hiragana: "の", katakana: "ノ"},
    {romaji: "ha", hiragana: "は", katakana: "ハ"},
    {romaji: "hi", hiragana: "ひ", katakana: "ヒ"},
    {romaji: "hu", hiragana: "ふ", katakana: "フ"},
    {romaji: "he", hiragana: "へ", katakana: "ヘ"},
    {romaji: "ho", hiragana: "ほ", katakana: "ホ"},
    {romaji: "ba", hiragana: "ば", katakana: "バ"},
    {romaji: "bi", hiragana: "び", katakana: "ビ"},
    {romaji: "bu", hiragana: "ぶ", katakana: "ブ"},
    {romaji: "be", hiragana: "べ", katakana: "ベ"},
    {romaji: "bo", hiragana: "ぼ", katakana: "ボ"},
    {romaji: "pa", hiragana: "ぱ", katakana: "パ"},
    {romaji: "pi", hiragana: "ぴ", katakana: "ピ"},
    {romaji: "pu", hiragana: "ぷ", katakana: "プ"},
    {romaji: "pe", hiragana: "ぺ", katakana: "ペ"},
    {romaji: "po", hiragana: "ぽ", katakana: "ポ"},
    {romaji: "ma", hiragana: "ま", katakana: "マ"},
    {romaji: "mi", hiragana: "み", katakana: "ミ"},
    {romaji: "mu", hiragana: "む", katakana: "ム"},
    {romaji: "me", hiragana: "め", katakana: "メ"},
    {romaji: "mo", hiragana: "も", katakana: "モ"},
    {romaji: "ya", hiragana: "や", katakana: "ヤ"},
    {romaji: "yu", hiragana: "ゆ", katakana: "ユ"},
    {romaji: "yo", hiragana: "よ", katakana: "ヨ"},
    {romaji: "ra", hiragana: "ら", katakana: "ラ"},
    {romaji: "ri", hiragana: "り", katakana: "リ"},
    {romaji: "ru", hiragana: "る", katakana: "ル"},
    {romaji: "re", hiragana: "れ", katakana: "レ"},
    {romaji: "ro", hiragana: "ろ", katakana: "ロ"},
    {romaji: "wa", hiragana: "わ", katakana: "ワ"},
    {romaji: "wo", hiragana: "を", katakana: "ヲ"},
    {romaji: "n", hiragana: "ん", katakana: "ン"},
];

const show = document.getElementById('show');
const input = document.getElementById('input');
const bloc = document.getElementById('bloc');
const note = document.getElementById('note');
let usedKanas = [];
let totalCounter = 0;
let correctCounter = 0;

function getRandomKana() {
    let randomIndex = Math.floor(Math.random() * kanaList.length);
    while (usedKanas.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * kanaList.length);
    }
    usedKanas.push(randomIndex);
    currentKana = kanaList[randomIndex];
    return currentKana;
}

function displayRandomKana() {
    let randomKana = getRandomKana();
    show.innerHTML = randomKana.hiragana;
    totalCounter++;
    updateCounters();
};

function checkRomaji() {
    if (currentKana.romaji == input.value) {
        note.innerText = "";
        correctCounter++;
        displayRandomKana();
        input.value = "";
        bloc.style.animation = "none";
        bloc.offsetHeight;
        bloc.style.animation = "vrai 3s ease-out";
    } else{
        note.innerText = 'La reponse pour "'+currentKana.hiragana+'" etait "'+currentKana.romaji+'"';
        input.value = "";
        bloc.style.animation = "none";
        bloc.offsetHeight;
        bloc.style.animation = "faux 3s ease-out";
        displayRandomKana();
    }
    updateCounters();
};

function updateCounters() {
    let totalCounterDiv = document.getElementById("total");
    let correctCounterDiv = document.getElementById("correct");
    totalCounterDiv.innerHTML = totalCounter + " / " + kanaList.length;
    correctCounterDiv.innerHTML = correctCounter + " / " + (totalCounter-1);
};

window.onload = displayRandomKana,updateCounters;
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      // ici vous pouvez mettre votre fonction de validation
      checkRomaji();
    }
  });
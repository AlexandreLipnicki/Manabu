fetch('json/kana.json')
  .then(response => response.json())
  .then(data => {
    const show = document.getElementById('show');
    const input = document.getElementById('input');
    const bloc = document.getElementById('bloc');
    const note = document.getElementById('note');
    let usedKanas = [];
    let totalCounter = 0;
    let correctCounter = 0;
    function getRandomKana() {
        let randomIndex = Math.floor(Math.random()*data.length);
        while (usedKanas.includes(randomIndex)) {
          randomIndex = Math.floor(Math.random()*data.length);
        }
        usedKanas.push(randomIndex);
        currentKana = data[randomIndex];
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
        totalCounterDiv.innerHTML = "Hiragana : " + totalCounter + " / " + data.length;
        correctCounterDiv.innerHTML = "Score : " + correctCounter + " / " + (totalCounter-1);
    };
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          // ici vous pouvez mettre votre fonction de validation
          checkRomaji();
        }
      });
    window.onload = displayRandomKana,updateCounters;
  })
  .catch(error => console.error(error));
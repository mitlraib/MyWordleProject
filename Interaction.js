let currentRow = 1;
let currentCollumn = 5;
const currentWord = oneWord();
const words = [ "תמונה" , "מצלמה" , "מחברת","בקבוק" ,"חולצה", "חברות","גלידה", "אלבום","מסיכה", "הצלחה",
    "משטרה","אולפן", "התחלה", "הסכמה","עבודה" ,"עברית" ,"עימות", "חפירה" , "מסגרת", "תאריך"];


document.addEventListener('keydown', function(event) {
    const letter = event.code[3].toLowerCase();
    typeLetter(letter);
});


function typeLetter(idLetter) {
    if(idLetter === 'enter') {
        if(currentCollumn != 0) {
            return;
        }
        if (ifExist() == false) {
            document.getElementById(`r${currentRow}c1`).innerText = "";
            document.getElementById(`r${currentRow}c2`).innerText = "";
            document.getElementById(`r${currentRow}c3`).innerText = "";
            document.getElementById(`r${currentRow}c4`).innerText = "";
            document.getElementById(`r${currentRow}c5`).innerText = "";
            alert("Not in word list!");
            currentCollumn = 5;
        } else {
            checkAnswer();
            currentRow++;
            currentCollumn = 5;
        }
        if(currentRow == 6) {
            return;
        }

        return;
    }

    if(idLetter === 'delete') {
        if(currentCollumn == 5) {
            return;
        }
        currentCollumn++;
        document.getElementById(`r${currentRow}c${currentCollumn}`).innerHTML = "";
        return;
    }

    const letterToHebrew = document.getElementById(idLetter).innerHTML;
    document.getElementById(`r${currentRow}c${currentCollumn}`).innerHTML = letterToHebrew;
    currentCollumn--;
}


function ifExist() {
    let letter1 = document.getElementById(`r${currentRow}c5`).innerText;
    let letter2= document.getElementById(`r${currentRow}c4`).innerText;
    let letter3 = document.getElementById(`r${currentRow}c3`).innerText;
    let letter4= document.getElementById(`r${currentRow}c2`).innerText;
    let letter5 = document.getElementById(`r${currentRow}c1`).innerText;

    let currentWord = letter1 + letter2 + letter3 + letter4 + letter5 + "";
    const words = [ "תמונה" , "מצלמה" , "מחברת","בקבוק" ,"חולצה", "חברות","גלידה", "אלבום","מסיכה", "הצלחה",
        "משטרה","אולפן", "התחלה", "הסכמה","עבודה" ,"עברית" ,"עימות", "חפירה" , "מסגרת", "תאריך"];
    for (j = 0; j < words.length; j++) {
        if (currentWord === words[j]) {
            return true;
        }
    } return false;
}


function oneWord(){
    const words = [ "תמונה" , "מצלמה" , "מחברת","בקבוק" ,"חולצה", "חברות","גלידה", "אלבום","מסיכה", "הצלחה",
        "משטרה","אולפן", "התחלה", "הסכמה","עבודה" ,"עברית" ,"עימות", "חפירה" , "מסגרת", "תאריך"];
    let rand = Math.floor(Math.random() * (20));
    let word = words[rand];
    return word;
}


// function logKey(e) {
//     typeLetter(`${e.code}`);
// }


function checkAnswer() {
    let letter1 = document.getElementById(`r${currentRow}c5`).innerText;
    let letter2= document.getElementById(`r${currentRow}c4`).innerText;
    let letter3 = document.getElementById(`r${currentRow}c3`).innerText;
    let letter4= document.getElementById(`r${currentRow}c2`).innerText;
    let letter5 = document.getElementById(`r${currentRow}c1`).innerText;

    let col = 5;

    for (i = col; i > 0; i--) {
        let letter = document.getElementById(`r${currentRow}c${i}`).innerHTML;
        if (letter == currentWord[col - i]) {
            document.getElementById(`r${currentRow}c${i}`).style.backgroundColor =
                "#538d4e";
            document
                .getElementById(`r${currentRow}c${i}`)
                .setAttribute("isCorrect", true);


        } else if (currentWord.includes(letter)) {
            document.getElementById(`r${currentRow}c${i}`).style.backgroundColor =
                "#b59f3b";
        } else {
            document.getElementById(`r${currentRow}c${i}`).style.backgroundColor =
                "#3a3a3c";
        }
        document.getElementById(`r${currentRow}c${i}`).style.color = "#ffffff";
    }

    let word = `${letter1}${letter2}${letter3}${letter4}${letter5}`
    if(word === currentWord) {
        alert("you won");
    }


    if (currentRow == 6){
        if (currentCollumn == 0) {
            if(!(word === currentWord)) {
                alert("you lose, the word was: " + currentWord);
            }
        }
    }

}
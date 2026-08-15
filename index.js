const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLengthOne = 8
let passwordLengthTwo = 12

let passwordGeneratedOne = document.getElementById("generated-password-one");
let passwordGeneratedTwo = document.getElementById("generated-password-two");

function getRandomChar(){
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar]
}

function generateRandomPassword(){
    let randomPasswordOne = '';
    let randomPasswordTwo = '';
    for(let i = 0; i < passwordLengthOne; i++){
        randomPasswordOne += getRandomChar();
    }
    for(let i = 0; i < passwordLengthTwo; i++){
        randomPasswordTwo += getRandomChar();
    }
    passwordGeneratedOne.textContent = randomPasswordOne;
    passwordGeneratedTwo.textContent = randomPasswordTwo;
}

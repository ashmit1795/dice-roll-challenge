let randomNumber1 = Math.floor(Math.random()*6) + 1;
let dice1 = document.querySelector(".img1");
dice1.setAttribute("src",`images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random()*6) + 1;
let dice2 = document.querySelector(".img2");
dice2.setAttribute("src",`images/dice${randomNumber2}.png`);

let heading = document.querySelector(".container h1");
// console.log(heading);

if(randomNumber1 === randomNumber2){
    heading.innerText = "It's a Draw!"
}else if(randomNumber1 > randomNumber2){
    heading.innerText = "🚩Player 1 Wins!"
}else if(randomNumber1 < randomNumber2){
    heading.innerText = "Player 2 Wins!🚩"
}
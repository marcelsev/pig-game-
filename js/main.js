const diceEl = document.querySelector("#dice");
const score1El =document.querySelector("#score--1");
const score2El= document.querySelector("#score--2");
const btnRoll = document.querySelector("#btn--roll");
const btnNew = document.querySelector("#btn--new");
const btnHold= document.querySelector("#btn--hold");
const currentScoreEl1= document.querySelector("#current--score--1");
const currentScoreEl2= document.querySelector("#current--score--2");
const player1El= document.querySelector("#player--1");
const player2El= document.querySelector("#player--2");
const btnList = document.querySelector("#btn--list");
//initialitation

diceEl.src = "";
score1El.textContent = 0;
score2El.textContent = 0;
let currentScore= 0;
let currentPlayer= 1;
let scorePlayer1= 0;
let scorePlayer2= 0;
let play= true;
let prenom = "";

btnRoll.addEventListener("click", function(){
    if(play === false) return;

const dice = Math.trunc(Math.random()*6+1);

diceEl.src= `./images/dice${dice}.png`;

if(dice===1){
    currentPlayer = currentPlayer === 1?2:1;
    currentScore= 0;
    currentScoreEl1.textContent= 0;
    currentScoreEl2.textContent=0;
    player1El.classList.toggle("active");
    player2El.classList.toggle("active");
    return;
}
currentScore += dice;
if(currentPlayer === 1){
    currentScoreEl1.textContent= currentScore;
}else{
    currentScoreEl2.textContent= currentScore;
}
})

btnHold.addEventListener("click", function(){
    if (play === false) return;

    if (currentPlayer===1 ){
        scorePlayer1 += currentScore;
        score1El.textContent=scorePlayer1;
        winner(scorePlayer1);

    }else{
        scorePlayer2+= currentScore;
        score2El.textContent= scorePlayer2;
        winner(scorePlayer2);
    }
});
const winner= (score)=>{
    if(score>= 20){
        if (currentPlayer === 1){
            player1El.classList.add("winner");
        }else{
            player2El.classList.add("winner");
        }
        currentScoreEl1.textContent= 0;
        currentScoreEl2.textContent= 0;
        diceEl.src= "";
        play= false;
        //information winner
        prenom = prompt("Félicitations champion! Comment tu t'appelles?");
        
       
    

    }else {
        switchPlayer();
    }
};
const switchPlayer = ()=>{
    currentPlayer=currentPlayer=== 1?2:1;
    currentScore= 0;
currentScoreEl1.textContent=0;
currentScoreEl2.textContent=0;
player1El.classList.toggle("active");
player2El.classList.toggle("active");
};

btnNew.addEventListener("click", ()=>{
    diceEl.src= "";
    score1El.textContent=0;
    score2El.textContent=0;
    currentScore=0;
    currentPlayer=1;
    scorePlayer1=0;
    scorePlayer2=0;
    play=true;
    player1El.classList.remove("winner");
    player2El.classList.remove("winner");
    player1El.classList.add("active");
    player2El.classList.remove("active");
});

btnList.addEventListener("click" ,()=>{
    alert(  )
})



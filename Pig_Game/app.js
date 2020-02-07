/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//On click of roll dice random number from 1 to 6 has to be generated

var roundscore,activePlayer,dice,scores;

//random number generated
roundscore=0;
scores=[0,0];
activePlayer =0;
resetAll();
//reset the initial values
function resetAll(){
  document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0'; 
   
}

//onclick on roll dice{
document.querySelector(".btn-roll").addEventListener("click",function(){
    dice = Math.floor((Math.random()*6)+1);
   //scores update 
    if(dice!==1){
        //Adds the scores
        roundscore+=dice;
        document.querySelector("#current-" +activePlayer).innerHTML=roundscore;
        }
        else{          
           nextPLayer();          
         }   
    //Dice Image Change
       diceChanges();
});

//onclick on Hold

document.querySelector(".btn-hold").addEventListener("click",function(){  
  //1. Scores need to updated   
    scores[activePlayer]+=roundscore;
    document.querySelector("#score-" + activePlayer).innerHTML=scores[activePlayer];
    if(scores[activePlayer]>=20){
        document.querySelector("#name-" +activePlayer).innerHTML="Winner";
        document.querySelector(".btn-roll").style.display="none";
        document.getElementsByClassName(".btn-roll").disabled=true;
        document.querySelector(".btn-hold").style.display="none";
        document.querySelector(".dice").style.display="none";
    }
    else{
       nextPLayer(); 
    }    
});

function nextPLayer(){
     activePlayer===0 ? activePlayer=1 : activePlayer=0;
            roundscore=0;
            document.querySelector('#current-0').textContent='0';
            document.querySelector('#current-1').textContent='0';
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
     
}
function diceChanges(){
    if(dice==1){
           document.querySelector(".dice").src="dice-1.png"
       }
       else if(dice==2){
           document.querySelector(".dice").src="dice-2.png"
       }
    else if(dice==3){
           document.querySelector(".dice").src="dice-3.png"
       }
    else if(dice==4){
           document.querySelector(".dice").src="dice-4.png"
       }
    else if(dice==5){
           document.querySelector(".dice").src="dice-5.png"
       }
     else{
           document.querySelector(".dice").src="dice-6.png"
       }
    
}
//Reset to Newgame
document.querySelector(".btn-new").addEventListener("click",function(){
    resetAll();
    document.querySelector(".btn-roll").style.display="block";
        document.querySelector(".btn-hold").style.display="block";
    document.querySelector(".dice").style.display="block";
});
    











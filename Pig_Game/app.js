/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//On click of roll dice random number from 1 to 6 has to be generated

var randomNumber,activePlayer,dice;

//random number generated
randomNumber=0;

activePlayer =0;
//onclick on roll dice{
document.querySelector(".btn-roll").addEventListener("click",function(){
    dice = Math.floor((Math.random()*6)+1);
    document.querySelector("#current-" +activePlayer).innerHTML=dice;
   //Dice Image Change
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
     else if(dice==6){
           document.querySelector(".dice").src="dice-6.png"
       }
    
    
});

//onclick on Hold

document.querySelector(".btn-hold").addEventListener("click",function(){
    
   
    
   
});













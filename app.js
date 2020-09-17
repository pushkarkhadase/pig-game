/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer, gamePlaying;

init();
//making the event handler and listerner for the dice roll button
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gamePlaying){
        //Task for roll button
    // 1.Get the random number..
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2.display the results..
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
    //3.Update the score only if the score is not 1
    if(dice !== 1){
        //calculate the round score and update it into the global variable
        roundScores += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScores;
       
    }else{
        winner();
        nextPlayer();
    }
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    //calculate the player score
    scores[activePlayer] += roundScores; 
    //display the score to the players
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    winner();
    nextPlayer();


});

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying = true;
    /*
    *The math . random will generate the number with 0.100000000 to 1.0000000000
    *So inorder to get the number within rage 0-5 we need to multiply random number 
    with 6
    *And then we do +1 inorder to make the range of random ness till 6
    */
    
    
    
    //Or method...
    
    // document.querySelector("#current-" + activePlayer).innerHTML = '<em>'+ dice +'</em>'
    
    //initialising screen.....
    //making the dice disappear as we dont need it before the game starts
    document.querySelector(".dice").style.display = 'none';
    
    //initialising the all values to zeros
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'player 1';
    document.querySelector('#name-1').textContent = 'player 2';
    
}



function winner(){
    if(scores[activePlayer]>= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('player-' + activeplayer +'-panel').classList.remove('active');
        gamePlaying = flase;
        
    }
}
function nextPlayer(){
        //pass the control to the next player
        //switching the player
        activePlayer===0 ? activePlayer=1 : activePlayer=0;

        //making the round score as 0
        roundScores=0;
        document.getElementById("current-0").textContent = 0;
        document.getElementById("current-1").textContent = 0;

        //to add the class in the html we can use following
        // document.querySelector('.player-0-panel').classList.remove('active');
        
        //to remove the class we can do following
        //document.querySelector('.player-1-panel').classList.add('active');

        //do Toggle the class as selected and unselected we can use following
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
       
}





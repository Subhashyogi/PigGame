'use strict';

// const scorePlayer_1 = document.querySelector("#score--1");
// const currentScorePlayer_1 = document.querySelector("#current--1").textContent;
// const scorePlayer_2 = document.querySelector('#score--2');
// const currentScorePlayer_2 = document.querySelector('#current--2');
// const player_1_name = document.querySelector('#player_1_name');
// const player_2_name = document.querySelector('#player_2_name');
// let name_1 = document.querySelector('#name--1').textContent;
// let name_2 = document.querySelector('#name--2').textContent;

// console.log(name_1);
// console.log(name_2);
const newGame = document.querySelector('.newGame');
const rollDice = document.querySelector('.rollDice');
const hold = document.querySelector('.hold');
const player_1 = document.querySelector('.player--1');
const player_2 = document.querySelector('.player--2');
const label = document.querySelector('.alter');
const alterChance = document.querySelector('#alter-Chance'); 
const send = document.querySelector('#start');
const inpname = document.querySelector('.inpName');
const inpbox = document.querySelector('.inpBox');

const hideShow = function() {
  if (!inpbox.classList.contains("hide") || inpbox.classList.contains("show")) {
    inpbox.classList.add("hide");
    inpbox.classList.remove("show");
  } else {
    inpbox.classList.add("show");
    inpname.classList.remove("hide");
  }
}

inpname.addEventListener('click',hideShow)

send.addEventListener(
  'click',
  (e) => {
    e.preventDefault();
    let player_1_name = document.querySelector("#player_1_name").value;
    let player_2_name = document.querySelector("#player_2_name").value;
    document.querySelector("#name--1").textContent = player_1_name;
    document.querySelector("#name--2").textContent = player_2_name;
    hideShow();
  }
)
// console.log(player_1_name);
// console.log(player_2_name);


// New Game button
newGame.addEventListener(
    'click',
    (e) => {
        document.querySelector("#score--1").textContent = 0;
        document.querySelector("#current--1").textContent = 0;
        document.querySelector("#score--2").textContent = 0;
        document.querySelector("#current--2").textContent = 0;
        document.querySelector("#name--1").textContent = 'Player 1';
        document.querySelector("#name--2").textContent = 'Player 2';
        toActivePlayer_1();
        // active();
        scorePlayer_1 = 0;
        scorePlayer_2 = 0;
        alterChance.checked = false;
        rollDice.disabled = false;
        hold.disabled = false;
        alterChance.disabled = true;
    }
)
const toActivePlayer_1 = function() {
    player_2.classList.remove("player-active");
    player_1.classList.add("player-active");
}
const toActivePlayer_2 = function() {
    player_1.classList.remove("player-active");
    player_2.classList.add("player-active");
}
//palyer active functon
const active = function () {
    if (
      player_1.classList.contains("player-active") &&
      !player_2.classList.contains("player-active")
    ){
        //  toActivePlayer_2();
        player_1.classList.remove("player-active");
        player_2.classList.add("player-active");
    }
    else if (
      !player_1.classList.contains("player-active") &&
      player_2.classList.contains("player-active")
    ) {
      //  toActivePlayer_1();
      player_2.classList.remove("player-active");
      player_1.classList.add("player-active");
    }
     
}
let scorePlayer_1 = 0;
//current score of player 1
const currentScorePlayer_1 = function() {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    // console.log(diceNumber);
    // console.log("player 1");
    // console.log(currentScorePlayer_1);
    if (diceNumber === 1) {
        document.querySelector("#score--1").textContent = 0;
        document.querySelector("#current--1").textContent = 0;
        active();
        scorePlayer_1 = 0;
    }
    else {

      scorePlayer_1 += diceNumber;
      // console.log('player 1 score' + scorePlayer_1);
     let c = document.querySelector("#current--1").textContent = scorePlayer_1;
      if (c >= Max) {
        document.querySelector("#name--1").textContent = "YOU WON!!!";
        document.querySelector("#score--1").textContent = scorePlayer_1;
        document.querySelector("#current--1").textContent = 0;
        // scorePlayer_1 = 0;
        toActivePlayer_1();
        rollDice.disabled = true;
        hold.disabled = true;
       
      }
      return scorePlayer_1;
    }
  }


//current score of player 2

let scorePlayer_2 = 0;
const currentScorePlayer_2 = function() {
    
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    // console.log(diceNumber);
    // console.log('player 2');
    // console.log(currentScorePlayer_1);
    if (diceNumber === 1) {
      document.querySelector("#score--2").textContent = 0;
      document.querySelector("#current--2").textContent = 0;
      active();
      scorePlayer_2 = 0;
    }
    else {

      scorePlayer_2 += diceNumber;
      // console.log("player 2 score " + scorePlayer_2);
     let c = document.querySelector("#current--2").textContent = scorePlayer_2;
      if (c >= Max) {
        document.querySelector("#name--2").textContent = "YOU WON!!!";
        document.querySelector("#score--2").textContent = scorePlayer_2;
        document.querySelector("#current--2").textContent = 0;
        // scorePlayer_1 = 0;
        toActivePlayer_2();
        rollDice.disabled = true;
        hold.disabled = true;
        alterChance.disabled = true;
      }
      return scorePlayer_2;
    }
}


//current data function for both players
const Max = 100;
const currentScoreBtnPlayer_1 = function () {
   
    if (scorePlayer_1 >= Max) {
      document.querySelector("#name--1").textContent = 'YOU WON!!!';
      document.querySelector("#score--1").textContent = scorePlayer_1;
      document.querySelector("#current--1").textContent = 0;
      // scorePlayer_1 = 0;
      rollDice.disabled = true;
      hold.disabled = true;
    }
    else {
      // console.log('player 1 score ' + scorePlayer_1);
      document.querySelector("#current--1").textContent = 0;
      // console.log(score);
      document.querySelector("#score--1").textContent = scorePlayer_1;
      active();
    }
    // toActivePlayer_2();
};
const currentScoreBtnPlayer_2 = function () {
    
    if (scorePlayer_2 >= Max){
      document.querySelector("#name--2").textContent = 'YOU WON!!!';
      document.querySelector("#current--2").textContent = 0;
      // console.log(score);
      document.querySelector("#score--2").textContent = scorePlayer_2;
      rollDice.disabled = true;
      hold.disabled = true;
      alterChance.disabled = true;
    }
    else {
      document.querySelector("#current--2").textContent = 0;
      // console.log(score);
      document.querySelector("#score--2").textContent = scorePlayer_2;
    }
    // active();
    // toActivePlayer_1();

};

// hold button for both players
const holdBtn = function (player) {
    
    //one by one chance of playing 
    // active();
      hold.addEventListener("click", player);
      active();
}





// if (
//   player_1.classList.contains(
//     "player-active") && !player_2.classList.contains("player-active")
//   )
//  {
//     console.log("player 1 is active");
//   rollDiceBtn(currentScorePlayer_1);
//   holdBtn(currentScoreBtnPlayer_1);
// } else {
//   console.log("player 2 is active");
//   rollDiceBtn(currentScorePlayer_2);
//   holdBtn(currentScoreBtnPlayer_2);
// }
  // console.log(currentScorePlayer_1);

  //RollDice button

rollDice.addEventListener(
    "click",
    () => {
        if (
          player_1.classList.contains("player-active") &&
          !player_2.classList.contains("player-active")
        ) {
        //   console.log("player 1 is active");
          currentScorePlayer_1();
        //   rollDiceBtn(currentScorePlayer_1);
          holdBtn(currentScoreBtnPlayer_1);
        } else {
        //   console.log("player 2 is active");
          currentScorePlayer_2();
        //   rollDiceBtn(currentScorePlayer_2);
          holdBtn(currentScoreBtnPlayer_2);
        }
    }
);










  // let score = 0;
  // rollDice.addEventListener(
  //     'click',
  //     (e) => {

  //         if (player_1.classList.contains("player-active")){
  //             currentScorePlayer_1();
  //         }
  //         else if (player_2.classList.contains("player-active")) {
  //             currentScorePlayer_2();
  //         }

  //     }
  // );

  //Hold button
//   hold.addEventListener("click", () => {
//     document.querySelector("#current--1").textContent = 0;
//     // console.log(score);
//     document.querySelector("#score--1").textContent = score;
//     document.querySelector("#current--2").textContent = 0;
//     // console.log(score);
//     document.querySelector("#score--2").textContent = score;
//     active();
//   });


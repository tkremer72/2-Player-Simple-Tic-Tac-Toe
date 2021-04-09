(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* Hamburger menu Peferred method with JS Event Listener */
const toggleButton = document.getElementById("toggle-menu");
const naviList = document.getElementById("navi-list");
toggleButton.addEventListener("click", () => {
  naviList.classList.toggle("active");
});
/* HTML Event Method */

/* function toggleMenu() {
     const naviList = document.getElementById('navi-list');
     naviList.classList.toggle('active');
} */

/*  Game constants */

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
/*  Game State (variables) */

let board;
let turn = "X";
let win;
/*  Cached element references */

const squares = Array.from(document.querySelectorAll("#board div"));
/*  Event listeners */

document.getElementById("board").addEventListener("click", handleTurn);
const messages = document.querySelector("h2");
document.getElementById("reset-button").addEventListener("click", init);
/*  Functions  */

function getWinner() {
  let winner = null;
  winningCombos.forEach((combo, index) => {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
  });
  return winner ? winner : board.includes("") ? null : "T"; //   if (winner) {
  //      return winner 
  //    } else if (board.includes('')) {
  //      return null // if there's an empty space, return null (no winner yet)
  //    } else {
  //      return 'T' // no winner and no empty spaces? That's a tie!
  //    }
}

function handleTurn(event) {
  let idx = squares.findIndex(square => {
    return square === event.target;
  });
  board[idx] = turn;
  turn = turn === "X" ? "O" : "X"; // if (turn === 'X') {
  // turn = 'O' 
  // } else {
  // turn = 'X' 
  // };

  win = getWinner();
  render();
}

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  render();
}

function render() {
  board.forEach((mark, index) => {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
  });
  messages.textContent = win === "T" ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`; //  if ( win === 'T' ) {
  //      messages.textContent = `That's a tie, queen!`
  //    } else if (win) { 
  //      messages.textContent = `${win} wins the game!`
  //    } else {
  //      messages.textContent = `It's ${turn}'s turn!`
  //    }
}

init();

},{}]},{},[1]);

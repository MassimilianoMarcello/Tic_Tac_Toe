



// const gameBoard = document.querySelector('#gameboard');
// const infoDisplay = document.querySelector('#info');
// const restartButton = document.querySelector('#restartButton');
// let go = 'cross';
// let gameActive = true; // Variabile per tenere traccia dello stato del gioco

// const startCells = ['', '', '', '', '', '', '', '', ''];

// function createBoard() {
//     gameBoard.innerHTML = ''; // Pulisci la scacchiera esistente
//     startCells.forEach((_cell, index) => {
//         const cellElement = document.createElement('div');
//         cellElement.classList.add('square');
//         cellElement.id = index;
//         cellElement.addEventListener('click', addGo, { once: true });
//         gameBoard.append(cellElement);
//     });
//     gameActive = true; // Il gioco è attivo dopo la creazione della scacchiera
//     infoDisplay.textContent = 'tic tac toe game';
// }

// function addGo(e) {
//     if (!gameActive) return; // Non fare nulla se il gioco è bloccato
    
//     if (e.target.firstChild) {
//         return; // Se il quadrato è già stato cliccato, esci dalla funzione
//     }
//     console.log('clicked');
//     const goDisplay = document.createElement('div');
//     goDisplay.classList.add(go);
//     e.target.append(goDisplay);
//     go = go === 'circle' ? 'cross' : 'circle';
//     infoDisplay.textContent = `It is now ${go}`;
//     checkScore();
// }

// function checkScore() {
//     const allSquares = Array.from(document.querySelectorAll('.square'));
//     const winningCombos = [
//         [0, 1, 2], 
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     const circleWins = winningCombos.some(array => 
//         array.every(cell => 
//             allSquares[cell].firstChild?.classList.contains('circle')
//         )
//     );
    
//     const crossWins = winningCombos.some(array => 
//         array.every(cell => 
//             allSquares[cell].firstChild?.classList.contains('cross')
//         )
//     );
    
//     console.log('circleWins:', circleWins); // Debug: Verifica il risultato di circleWins
//     console.log('crossWins:', crossWins); // Debug: Verifica il risultato di crossWins
    
//     if (circleWins) {
//         infoDisplay.textContent = 'Circle wins!';
//         gameActive = false; // Blocca il gioco
//     } else if (crossWins) {
//         infoDisplay.textContent = 'Cross wins!';
//         gameActive = false; // Blocca il gioco
//     } else if (allSquares.every(square => square.firstChild)) {
//         infoDisplay.textContent = 'Draw!';
//         gameActive = false; // Blocca il gioco
//     }
// }

// function restartGame() {
//     createBoard(); // Ricrea la scacchiera
// }

// restartButton.addEventListener('click', restartGame);

// // Inizializza il gioco
// createBoard();

// import { createBoard, restartGame } from './components/gameBoard.js';
// import { setupEventListeners } from './events/eventListeners.js';

// createBoard();
// setupEventListeners();
// restartGame()





import { createBoard } from './components/gameBoard.js';
import { setupEventListeners } from './events/eventListeners.js';

createBoard();
setupEventListeners();


import { addGo } from '../handlers/gameHandlers.js';
import { infoDisplay, gameBoard } from '../utils/constants.js';
import state from '../utils/state.js';

export const startCells = ['', '', '', '', '', '', '', '', ''];

export function createBoard() {
    gameBoard.innerHTML = '';
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo, { once: true });
        gameBoard.append(cellElement);
    });
    state.gameActive = true;
    infoDisplay.textContent = 'tic tac toe game';
}

export function restartGame() {
    createBoard();
}

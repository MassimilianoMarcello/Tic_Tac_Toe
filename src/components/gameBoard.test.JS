// board.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import { createBoard, restartGame } from './gameBoard.js';
import { gameBoard, infoDisplay } from '../utils/constants.js';
import state from '../utils/state.js';

// Helper function to clear the DOM between tests
const clearDOM = () => {
    gameBoard.innerHTML = '';
    infoDisplay.textContent = '';
};

describe('Board functions', () => {
    beforeEach(() => {
        // Clear DOM and reset state before each test
        clearDOM();
        state.gameActive = false;
    });

    it('should create a board with 9 cells', () => {
        createBoard();
        const cells = gameBoard.querySelectorAll('.square');
        expect(cells.length).toBe(9);
    });

    it('should create cells with unique IDs from 0 to 8', () => {
        createBoard();
        const cells = gameBoard.querySelectorAll('.square');
        cells.forEach((cell, index) => {
            expect(cell.id).toBe(index.toString());
        });
    });

    it('should add the correct event listener to each cell', () => {
        createBoard();
        const cells = gameBoard.querySelectorAll('.square');
        cells.forEach(cell => {
            const listeners = getEventListeners(cell);
            expect(listeners.click.length).toBe(1); // Check that one click listener is added
            expect(listeners.click[0].listener).toBe(addGo); // Ensure the listener is addGo
        });
    });

    it('should set state.gameActive to true and update infoDisplay text on board creation', () => {
        createBoard();
        expect(state.gameActive).toBe(true);
        expect(infoDisplay.textContent).toBe('tic tac toe game');
    });

    it('should restart the game by calling createBoard again', () => {
        createBoard();
        expect(gameBoard.innerHTML).not.toBe('');
        restartGame();
        expect(gameBoard.innerHTML).not.toBe('');
    });
});

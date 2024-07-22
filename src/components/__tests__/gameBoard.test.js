import { createBoard, restartGame } from '../../components/gameBoard.js'; // Adjust as needed
import { addGo } from '../../handlers/gameHandlers.js';
import { infoDisplay, gameBoard } from '../../utils/constants.js';
import state from '../../utils/state.js';

jest.mock('../../handlers/gameHandlers.js', () => ({
    addGo: jest.fn(),
}));

describe('Tic-Tac-Toe Game', () => {
    beforeEach(() => {
        // Mock DOM setup
        document.body.innerHTML = `
            <div id="gameBoard"></div>
            <div id="infoDisplay"></div>
        `;
        // Manually access the mocked DOM elements
        const gameBoardElement = document.getElementById('gameBoard');
        const infoDisplayElement = document.getElementById('infoDisplay');
        state.gameActive = false; // Reset state
    });

    test('createBoard initializes the board correctly', () => {
        createBoard();

        const cells = document.getElementById('gameBoard').querySelectorAll('.square');
        expect(cells.length).toBe(9); // Check if 9 cells are created

        cells.forEach((cell, index) => {
            expect(cell.id).toBe(String(index));
            expect(addGo).not.toHaveBeenCalled();
            cell.click(); // Simulate click
            expect(addGo).toHaveBeenCalled();
        });

        expect(state.gameActive).toBe(true);
        expect(document.getElementById('infoDisplay').textContent).toBe('tic tac toe game');
    });

    test('restartGame calls createBoard', () => {
        const spyCreateBoard = jest.spyOn(module, 'createBoard');
        restartGame();
        expect(spyCreateBoard).toHaveBeenCalled();
    });
});

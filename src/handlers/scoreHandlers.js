import { infoDisplay } from '../utils/constants.js';
import state from '../utils/state.js';

export function checkScore() {
    const allSquares = Array.from(document.querySelectorAll('.square'));
    const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const circleWins = winningCombos.some(array => 
        array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle')
        )
    );
    
    const crossWins = winningCombos.some(array => 
        array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross')
        )
    );
    
    console.log('circleWins:', circleWins);
    console.log('crossWins:', crossWins);
    
    if (circleWins) {
        infoDisplay.textContent = 'Circle wins!';
        state.gameActive = false;
    } else if (crossWins) {
        infoDisplay.textContent = 'Cross wins!';
        state.gameActive = false;
    } else if (allSquares.every(square => square.firstChild)) {
        infoDisplay.textContent = 'Draw!';
        state.gameActive = false;
    }
}

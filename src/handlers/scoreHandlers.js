import { infoDisplay } from '../utils/constants.js';
import state from '../utils/state.js';
import {winningCombos} from '../data.js';



export function checkScore() {
    const allSquares = Array.from(document.querySelectorAll('.square'));


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

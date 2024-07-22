import { restartGame } from '../components/gameBoard.js';
import { restartButton } from '../utils/constants.js';

export function setupEventListeners() {
    restartButton.addEventListener('click', restartGame);
}

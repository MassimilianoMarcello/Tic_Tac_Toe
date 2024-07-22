import { checkScore } from './scoreHandlers.js';
import { infoDisplay } from '../utils/constants.js';
import state from '../utils/state.js';

export function addGo(e) {
    if (!state.gameActive) return;
    
    if (e.target.firstChild) {
        return;
    }
    console.log('clicked');
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(state.go);
    e.target.append(goDisplay);
    state.go = state.go === 'circle' ? 'cross' : 'circle';
    infoDisplay.textContent = `It is now ${state.go}`;
    checkScore();
}

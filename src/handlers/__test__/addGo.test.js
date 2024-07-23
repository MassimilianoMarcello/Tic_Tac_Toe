// addGo.test.js
import { addGo } from '../gameHandlers.js';
import { checkScore } from '../scoreHandlers.js';
import { infoDisplay } from '../../utils/constants.js';
import state from '../../utils/state.js';

// Mock the checkScore function to verify its invocation without executing its logic
jest.mock('../scoreHandlers.js', () => ({
  checkScore: jest.fn()
}));

// Mock the infoDisplay object to test text updates without affecting the real DOM
jest.mock('../../utils/constants.js', () => ({
  infoDisplay: {
    textContent: ''
  }
}));

describe('addGo', () => {
  let mockEvent;

  beforeEach(() => {
    // Reset the game state before each test to ensure a clean environment
    state.go = 'cross'; // Start with the 'cross' symbol
    state.gameActive = true; // Ensure the game is active
    infoDisplay.textContent = ''; // Clear any text content in the display

    // Create a mock div element to simulate a square in the game board
    const mockDiv = document.createElement('div');
    mockDiv.classList.add('square');
    mockDiv.id = '0';

    mockEvent = {
      target: mockDiv // Simulate a click event targeting this div
    };
  });

  it('should add a symbol to the clicked square', () => {
    addGo(mockEvent);

    // Verify that a child element has been added, indicating a symbol was placed
    expect(mockEvent.target.firstChild).not.toBeNull();
    // Check that the symbol added is 'cross'
    expect(mockEvent.target.firstChild.classList.contains('cross')).toBe(true);
  });

  it('should switch the symbol between cross and circle', () => {
    // Simulate the first click, which should add 'cross' and switch to 'circle'
    addGo(mockEvent);
    expect(state.go).toBe('circle');

    // Create a new mock div for the second click simulation
    const newMockDiv = document.createElement('div');
    newMockDiv.classList.add('square');
    newMockDiv.id = '1';

    const newMockEvent = {
      target: newMockDiv
    };

    // Simulate the second click, which should add 'circle' and switch to 'cross'
    addGo(newMockEvent);
    expect(state.go).toBe('cross');
  });

  it('should not add a symbol if the game is inactive', () => {
    state.gameActive = false; // Deactivate the game
    addGo(mockEvent);

    // Ensure no symbol is added when the game is inactive
    expect(mockEvent.target.firstChild).toBeNull();
  });

  it('should not add a symbol if the square already has one', () => {
    // Initially add a symbol to the square
    const initialGoDisplay = document.createElement('div');
    initialGoDisplay.classList.add('cross');
    mockEvent.target.append(initialGoDisplay);

    addGo(mockEvent);

    // Verify no additional symbols are added to a filled square
    expect(mockEvent.target.children.length).toBe(1);
  });

  it('should update infoDisplay text content', () => {
    addGo(mockEvent);

    // Confirm that the display text reflects the next player's turn
    expect(infoDisplay.textContent).toBe('It is now circle');
  });

  it('should call checkScore', () => {
    addGo(mockEvent);

    // Ensure that checkScore is invoked to evaluate the game state
    expect(checkScore).toHaveBeenCalled();
  });
});

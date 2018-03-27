import { ROLL_DICE, TOGGLE_KEPT } from '../actions/currentGame';

// 1's - 6's need to add total dice of that value
// if you get Three of a kind', 'Four of a kind', or 'Chance' you add up all of the dice
// if full house, straights and yahtzee. omit the value prop to give it a static score

const scores = [
  { section: 'upper', name: 'Ones', score: null, value: 1 },
  { section: 'upper', name: 'Twos', score: null, value: 2 },
  { section: 'upper', name: 'Threes', score: null, value: 3 },
  { section: 'upper', name: 'Fours', score: null, value: 4 },
  { section: 'upper', name: 'Fives', score: null, value: 5 },
  { section: 'upper', name: 'Sixes', score: null, value: 6 },
  { section: 'lower', name: 'Three of a kind', score: null, addAll: true },
  { section: 'lower', name: 'Four of a kind', score: null, addAll: true },
  { section: 'lower', name: 'Chance', score: null, addAll: true },
  { section: 'lower', name: 'Full House', score: null },
  { section: 'lower', name: 'Low Straight', score: null },
  { section: 'lower', name: 'Hight Straight', score: null },
  { section: 'lower', name: 'Yahtzee', score: null },
]

const currentGame = (
  state = {
    roll: 0,
    dice: [...new Array(5)],
    keep: [],
    scores, //because of scores above need to add in scores here.
  },
  action
) => {
  switch (action.type) {
    case ROLL_DICE:
      return {
        ...state,
        dice: action.dice,
        roll: state.roll + 1
      }
    case TOGGLE_KEPT:
      return {
        ...state,
        keep: action.keep
      } // in this I am describing the state changes, I am telling it what is going to happen to the state 
        // the reducer is just a blueprint in how the state can change. 
    default:
      return state
  }
}

export default currentGame;
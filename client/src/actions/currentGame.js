export const ROLL_DICE = 'ROLL_DICE';
export const TOGGLE_KEPT = 'TOGGLE_KEPT';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const RESET_ROLL = 'RESET_ROLL';
export const NEW_GAME = 'NEW_GAME';

export const updateScores = (scores) => {
  return { type: UPDATE_SCORE, scores }
}

export const resetRoll = () => {
  return { type: RESET_ROLL }
}

export const newGame = () => {
  return { type: NEW_GAME }
}

export const rollDice = () => {
  return (dispatch, getState) => { // this getState is access to your redux store
    const { keep, dice } = getState().currentGame

    const newDice = dice.map ( (value, index) => {
      if (keep.includes(index))
        return value //if you return inside of an else you go to the next element. you could say else here but it is automatically done
      return Math.floor(Math.random() * 6) + 1
    })
    dispatch({ type: ROLL_DICE, dice: newDice })
  }
}

export const toggleKept = (index) => {
  return (dispatch, getState) => {
    const { keep } = getState().currentGame
    let updated;

    if (keep.includes(index))
      updated = keep.filter( k => k !== index )
    else // here you need the else because your not in a loop, you are actually doing somethig with the data later. 
      updated = [...keep, index]

    dispatch({ type: TOGGLE_KEPT, keep: updated })
  }
}
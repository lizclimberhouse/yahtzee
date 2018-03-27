import React from 'react';
import Dice from './Dice';
import { Grid, Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { rollDice } from '../actions/currentGame';

  //NO LONGER NEEDED WHEN SWITCHED FROM REACT TO REDUX
const Board = ({ 
  roll, 
  dice, 
  // rollDice, 
  keep, 
  // toggleKept, 
  dispatch, //this is needed to be albe to roll the dice
}) => {
  const maxRoll = roll === 3;
  const disabled = maxRoll ? { disabled: true } : {}
  return (
    <Grid>
      <Grid.Row>
        <Button
          fluid
          onClick={() => dispatch(rollDice())}
          // onClick={rollDice}
          {...disabled}
        >
          { maxRoll ? 'Score Roll' : 'Roll Dice' }
        </Button>
        <Grid.Column width={16}>
          <Divider hidden />
        </Grid.Column>
        { roll > 0 && 
            dice.map( (d,i) => {
              const kept = keep.includes(i)
              return (
                <Dice 
                  key={i} 
                  value={d} 
                  kept={kept} 
                  // toggleKept={toggleKept} 
                  index={i} 
                />
              )
            })
        }
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {//need to get rollm dice, and keep out of the redux store for the const Board at the top of this file.
  const { roll, dice, keep } = state.currentGame;
  return {
    roll,
    dice,
    keep,
  }
}

export default connect(mapStateToProps)(Board);
// export default Board;
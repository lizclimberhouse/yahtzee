import React from 'react';
import Dice from './Dice';
import { Grid, Button, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { rollDice, newGame, postScore } from '../actions/currentGame';

// changed to class

  //NO LONGER NEEDED WHEN SWITCHED FROM REACT TO REDUX
// const calcScore = (scores) => {
//   return scores.map( s => s.score )
//                .reduce( (total, score) => {
//                   return total + score
//                 }, 0)
// }

// const Board = ({ 
//   roll, 
//   dice, 
//   // rollDice, 
//   keep, 
//   // toggleKept, 
//   dispatch, //this is needed to be albe to roll the dice
//   scores,
// }) => {

  class Board extends React.Component {
    state = { gameOver: false }

    checkEndGame = () => {
      const { scores } = this.props;
      let gameOver = true;
      scores.forEach( s => {
          if ( s.score === null )
            gameOver = false
        })
      if (gameOver && !this.state.gameOver)  {//only want to set this state if gameOVer is true and we haven't already set that state is true. Since we are calling this in our render we dont want to get stuck in an infinate loop
        const score = this.calcScore();
        this.props.dispatch(postScore(score))
        this.setState({ gameOver }) // ^ see above comment
      }
    }

    calcScore = () => {
      return this.props.scores
        .map( s => s.score )
        .reduce( (total, score) => {
          return total + score
        },0)
    }

    startNewGame = () => {
      this.props.dispatch(newGame())
      this.setState({ gameOver: false })
    }
  
    render() {
      const {
        roll, 
        dice, 
        keep,
        scores,
        dispatch,
      } = this.props
      const maxRoll = roll === 3;
      const disabled = maxRoll ? { disabled: true } : {}
      const { gameOver } = this.state;
      this.checkEndGame() //don't usually want to do this, aka set state in render, unless it wont trigger a new set state infinately.

      return (
        <Grid>
          <Grid.Row>
            { gameOver ?
              <Button
                fluid
                onClick={this.startNewGame}
              >
                New Game?
              </Button>
              :
              
              <Button
                fluid
                onClick={() => dispatch(rollDice())}
                {...disabled}
              >
                { maxRoll ? 'Score Roll' : 'Roll Dice' }
              </Button>
            }
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
                      index={i}
                    />
                  )
                })
              }
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header textAlign="center">
                Total: { this.calcScore() }
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  }

const mapStateToProps = (state) => {//need to get rollm dice, and keep out of the redux store for the const Board at the top of this file.
  const { roll, dice, keep, scores } = state.currentGame;
  return {
    roll,
    dice,
    keep,
    scores,
  }
}

export default connect(mapStateToProps)(Board);
// export default Board;
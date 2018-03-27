import React from 'react'
import { Grid } from 'semantic-ui-react'
import Board from './Board'
import Scorecard from './Scorecard'

const styles = {
  fullHeight: { height: '100vh' },
  board: { backgroundColor: '#AAFFAA' },
  scores: { backgroundColor: '#9370DB' },
}
  //NO LONGER NEEDED WHEN SWITCHED FROM REACT TO REDUX

// class Game extends React.Component {
  // state = { 
  //   roll: 0,
  //   dice: [...new Array(5)],
  //   keep: [], 
  // }

  // toggleKept = (i) => {
  //   const { keep } = this.state;
  //   let updatedKeep;

  //   if (keep.includes(i))
  //     updatedKeep = keep.filter( k => k !== i )
  //   else
  //     updatedKeep = [...keep, i]

  //   this.setState({ keep: updatedKeep })
  // }

  // rollDice = () => {
  //   const { keep } = this.state;

  //   const dice = this.state.dice.map( (el, i) => {
  //     if (keep.includes(i))
  //       return el
  //     return Math.floor(Math.random() * 6) + 1
  //   });

  //   this.setState( state => {
  //     return { dice, roll: state.roll + 1 }
  //   })
  // }
  const Game = () => (
  // render() {
    // const { roll, dice, keep } = this.state;

    // return (
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={10}
            style={{...styles.fullHeight, ...styles.board }}
          >
            <Board 
              // roll={roll}
              // dice={dice}
              // rollDice={this.rollDice}
              // keep={keep}
              // toggleKept={this.toggleKept}
            />
          </Grid.Column>
          <Grid.Column
            width={6}
            style={{...styles.fullHeight, ...styles.scores}}
          >
            <Scorecard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
//   }
// }

export default Game;
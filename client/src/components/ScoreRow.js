//turned into a class. type render, take the props I was passing in before adn set them to this.props. then type render, and put everything I was showing before and put it in the render. Then replace the const with class and extends React.Compo... and close the class, render, adn return.
import React from 'react';
import { 
  List, 
  Header 
} from 'semantic-ui-react';

import { updateScores, resetRoll } from '../actions/currentGame';
import { connect } from 'react-redux';
import {
  singles,
  addAllDice,
  staticScore,
} from '../utils/scoringEngine';

const styles = {
  pointer: { cursor: 'pointer' }
}

class ScoreRow extends React.Component {
  updateScore = (key) => {
    const { currentGame: { dice, scores }, dispatch } = this.props;
    let entry = scores.find( s => s.name === key );
    dispatch(resetRoll())

    if (entry.value)
      entry.score = singles(entry.value, dice)
    else if (entry.addAll)
      entry.score = addAllDice(entry.name, dice)
    else
      entry.score = staticScore(entry.name, dice)

    const newScores = scores.map( score => {
      if (score.name === key)
        return entry
      return score
    });

    dispatch(updateScores(newScores))
  }

  render() {
    const { name, score, currentGame: { roll } } = this.props;
    return (
      <List.Item>
        { score === null &&
            <List.Icon
              style={styles.pointer}
              name="check circle outline"
              color="green"
              onClick={ roll !== 0 ? 
                () => this.updateScore(name) : f => f
              }
            />
        }
        <List.Content>
          <Header as="h4" floated="left">
            {score || 0}
          </Header>
          <Header as="h5" floated="right">
            {name}
          </Header>
        </List.Content>
      </List.Item>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreRow);
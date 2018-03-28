import React from 'react';
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import ScoreRow from './ScoreRow';

class ScoreSection extends React.Component {

  total = (score, label) => {
    return (
      <List.Item key={label}>
        <Header floated="left">{label}</Header>
        <Header 
          floated="right"
          style={{ marginRight: '20px' }}
        >
          {score}
        </Header>
      </List.Item>
    )
  }

  generateTotals = () => {
    const { currentGame: { scores }, label } = this.props;
    const sectionScores = [];
    const sectionTotal = scores
      .filter( s => s.section === label.toLowerCase() ) 
      .reduce( (total, entry) => {
        const score = entry.score || 0
        return total + score
      }, 0)

    sectionScores.push(this.total(sectionTotal, 'Section Total'))

    if (label === 'Upper') {
      const bonus = sectionTotal >= 63 ? 35 : 0
      sectionScores.push(this.total(bonus, 'Bonus'))
      sectionScores.push(this.total(bonus + sectionTotal, 'Total Upper'))
    }

    return sectionScores;
    
  }

  render() {
    const { label, currentGame: { scores }} = this.props
    return (
      <Segment basic>
        <Header as="h3">{label} Section</Header>
        <List divided>
          { scores
              .filter( s => s.section === label.toLowerCase() )
              .map( (score, i) => 
                <ScoreRow key={i} {...score} /> 
              )
          }
          { this.generateTotals() }
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreSection)
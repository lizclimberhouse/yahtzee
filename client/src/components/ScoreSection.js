import React from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import { connect } from 'react-redux'; //to get the scores
import ScoreRow from './ScoreRow';

class ScoreSection extends React.Component {
  render() {
    const { label, currentGame: { scores }} = this.props
    return (
      <Segment basic>
        <Header as="h3">{ label } Section</Header>
        <List divided>
          { scores 
              .filter( s => s.section === label.toLowerCase() )
              .map( (score, i) => <ScoreRow key={i} {...score} /> )
          }
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentGame: state.currentGame }
}

export default connect(mapStateToProps)(ScoreSection);
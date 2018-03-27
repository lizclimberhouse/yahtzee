import React from 'react';
import { List, Header } from 'semantic-ui-react';

const styles = {
  pointer: { cursor: 'pointer' }
}

const ScoreRow = ({ name, score }) => (
  <List.Item>
    { score === null && <List.Icon style={styles.pointer} name="check circle outline" color="green" /> }
      <List.Content>
        <Header as="h4" floated="left">{ score || 0 }</Header>
        <Header as="h5" floated="right">{ name }</Header>        
      </List.Content>
  </List.Item>
)

export default ScoreRow;
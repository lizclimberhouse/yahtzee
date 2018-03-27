import React, { Fragment } from 'react'; // use fragment to have 2 differnet sections without injecting an unnessessary div into the DOM
import ScoreSection from './ScoreSection';

// with react we can use the same compnent and change its look and funciton with labels

const Scorecard = () => (
  <Fragment>
    <ScoreSection label="Upper" />
    <ScoreSection label="Lower" />
  </Fragment>
)

export default Scorecard;
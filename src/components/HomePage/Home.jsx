import React, { Component } from 'react';
import Contribution from './Contribution/Contribution';
import Promote from './Promote/Promote';
import Work from './Work/Work';

export class Home extends Component {
  render() {
    return (
      <div>
        <hr />
        <Contribution />
        <Promote />
        <Work />
      </div>
    );
  }
}

export default Home;

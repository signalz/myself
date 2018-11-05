import React, { Component } from 'react';

import './intro.css';

class MyIntro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="name">Son Nguyen</div>
        <div className="description">
          <div>Experienced full stack developer</div>
          <div className="divider"></div>
          <div className="legends">I code stuff</div>
        </div>
      </div>
    );
  }
}

export default MyIntro;

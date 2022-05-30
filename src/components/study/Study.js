import React, { Component } from 'react';
import './Study.css';

const studies = [
  "Epitech",
  "EPSI"
]

class Study extends Component {
  render() {
    return (
      <div className="Study">
        Study
        <div>
          {studies.map((study, i) => <div key={i}>{study}</div>)}
        </div>
      </div>
    );
  }
}

export default Study;

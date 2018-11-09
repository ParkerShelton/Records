import React, { Component } from 'react';
import './Record.css';

class Record extends Component {

  render() {
    return (
      <li className="Record">
        <div className="recordContainer">
          {/* <img alt="Album Cover" /> */}
          <div className="img"></div>
          <h3>{this.props.record.band}</h3>
          <h3>{this.props.record.album}</h3>
        </div>
      </li>
    );
  }
}

export default Record;

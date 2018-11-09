import React, { Component } from 'react';
import './Home.css';

import RecordList from '../../components/recordList/RecordList';
import AddRecord from '../../components/addRecord/AddRecord';

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <RecordList records={this.props.records}/>

          <AddRecord onChange={this.onChange} />
        </div>
    );
  }
}

export default Home;

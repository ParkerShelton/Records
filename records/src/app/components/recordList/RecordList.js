import React, { Component } from 'react';
import './RecordList.css';

import Record from '../record/Record';

class RecordList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchAlbum: "",
      searchBand: ""
    }
  }

  renderRecords = () => {
    if(this.props.records !== null) {
      let records = this.props.records;
      let searchAlbum = this.state.searchAlbum.trim().toLowerCase();
      let searchBand = this.state.searchBand.trim().toLowerCase();

      // SEARCH BY ALBUM NAME
      if(searchAlbum.length > 0) {
        records = records.filter((record) => {
          return record.album.toLowerCase().match(searchAlbum);
        });
        return records.map((record) => {
          return <Record key={record.id} record={record} />
        });

      // SEARCH BY BAND NAME
      } else if(searchBand.length > 0) {
        records = records.filter((record) => {
          return record.band.toLowerCase().match(searchBand);
        });
        return records.map((record) => {
          return <Record key={record.id} record={record} />
        });

      // NO SEARCH
      } else {
        return records.map((record) => {
          return <Record key={record.id} record={record} />
        });
      }

    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="RecordList">
        <h2>Record List</h2>

        <ul>
          {this.renderRecords()}
        </ul>
      </div>
    );
  }
}

export default RecordList;

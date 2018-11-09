import React, { Component } from 'react';
import './AddRecord.css';

class AddRecord extends Component {

  render() {
    return (
      <div className="AddRecord">
        <h2>Add Record</h2>

        <form>
          <div className="bandName">
            <label htmlFor="bandName">Band Name</label>
            <input type="text" id="bandName" onChange={(e) => this.props.onChange("band", e.value)}/>
          </div>

          <div className="albumName">
            <label htmlFor="albumName">Album Name</label>
            <input type="text" id="albumName" />
          </div>

          <div className="recCondition">
            <label htmlFor="recCondition">Record Condition</label>
            <select id="recCondition">
              <option>Poor</option>
              <option>Good</option>
              <option>Great</option>
              <option>Mint</option>
            </select>
          </div>

          <div className="covCondition">
            <label htmlFor="covCondition">Cover Condition</label>
            <select id="covCondition">
              <option>Poor</option>
              <option>Good</option>
              <option>Great</option>
              <option>Mint</option>
            </select>
          </div>

          <div className="hasPlastic">
              <p>Does the record have a plastic cover?</p>

              <div className="plasticCheck">
                <label htmlFor="plasticYes">Yes</label>
                <input type="checkbox" id="plasticYes"/>
              </div>

              <div className="plasticCheck">
                <label htmlFor="plasticNo">No</label>
                <input type="checkbox" id="plasticNo"/>
              </div>

            </div>

          <button>Add Record</button>
        </form>
      </div>
    );
  }
}

export default AddRecord;

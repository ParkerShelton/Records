import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import recordsData from '../records.json';
import './Reset.css';
import './App.css';

import Header from './components/header/Header';
import Home from './pages/home/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: recordsData,

      formData: {
        album: null,
        band: null,
        recordCondition: null,
        coverCondition: null,
        hasPlastic: null
      }
    }
  }

  onChange = (type, value) => {
    this.setState({
      formData: {
        type: value
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {console.log(this.state.formData)}
          <Header />

          <Switch>
            <Route exact path="/" render={(props) => <Home onChange={this.onChange} records={this.state.records} {...props} />} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

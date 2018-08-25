import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddRecord from './AddRecord';
import AggregationTable from './AggregationTable.js';
import store from './store/index.js';
import {Provider} from 'react-redux';
import {listenToRecords} from './actions/records';
class App extends Component {
  componentWillMount(){
    store.dispatch(listenToRecords());
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <div className='wrap'>
      <AddRecord/>
      <AggregationTable/>
      </div>
      </div>
      </Provider>
    );
  }
}

export default App;

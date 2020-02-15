import React from 'react';
import logo from './logo.svg';
import './App.css';
import bottleList from "./BottleList"
import BottleList from './BottleList';

class TestChildElement extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <p>this is my test class instance</p>
    )
  }
}



function App() {
  return (
    <div className="App">
      <BottleList />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Study from './components/study/Study';
import Skill from './components/skill/Skill';
import Experience from './components/experience/Experience';
import Navbar from './layouts/navbar/Navbar';
import Header from './layouts/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <Skill></Skill>
        <Study></Study>
        <Experience></Experience>
      </div>
    );
  }
}

export default App;

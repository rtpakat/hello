import React, { Component } from 'react';
import SeyHello from './components/SeyHello';
import Boder from './components/Boder';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
        name: "Rungtip",
        age: 22
    };
  }

  incrementAge (){
    this.setState({age:this.state.age +10});
  }

  decrementAge(){
    this.setState({age:this.state.age -1});
  }

  render() {
    return (
      <div className="App">
        <SeyHello name={this.state.name} age={this.state.age} />
        
        <Boder>
       <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>{" "}
       <button onClick={() => this.decrementAge()}>ลดอายุ</button>
       </Boder>
      </div>
      
    );
  }
}

export default App;

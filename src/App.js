import React,{Component} from 'react'
import Header from './components/Header';
import Section from './components/Section';
import './App.css';
import Circles from './components/Circles';


class App extends Component{
  constructor(props){
    super(props)
    
    this.state={cond:false}
  }
  
  render(){
  
  console.log("render");
  return (
    <div className="App">
     <Header/>
     <Section/>
     <Circles/>
    </div>
  );
}
}

export default App;

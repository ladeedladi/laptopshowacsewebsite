import React,{Component} from 'react'
import logo from './image/logo.png'
import './App.css';


class App extends Component{
  constructor(props){
    super(props)
    
    this.state={cond:false}
  }
  
  render(){
  
  console.log("render");
  return (
    <div className="App">
    <nav className={this.state.cond?"nav2":"nav"}>
   <div className="title"><h1>title</h1></div>
   <div className="div1">
    <ul className={this.state.cond?"nav-links-active":"nav-links"} >
      <li>Home</li>
      <li>Products</li>
      <li>Contacts</li>
    </ul>
    </div>
   </nav> 
   <h1>{this.state.count}</h1>
<i onClick={()=>{this.setState({cond:!this.state.cond})
  console.log(this.state.cond)}
  } className="fas fa-align-justify"></i>
    </div>
  );
}
}

export default App;

import React,{Component} from 'react'
import logo from "./images/logo.png"
import girl from "./images/landing-page-girl.png"
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
    <header className="header">
      <div>
        <img src={logo} alt="" />
        <h1>Soundwave</h1>
      </div>
      <nav>
        <ul>
          <li>Discover</li>
          <li>Home</li>
        </ul>
      </nav>
    </header>
     <section>
       <div className="image-wrapper">
        <div className="img"></div>
       </div>
       <div className="right-section">
          <h1>Feel the music</h1>
          <p>Not every band is Queen</p>
          <button className="btn">click</button>
       </div>
     </section>
     <div className="circle"></div>
     <div className="circle-2"></div>
     <div className="circle-3"></div>
    </div>
  );
}
}

export default App;

import React from 'react'
import './App.css'



function App() {

  return (
    <>
    <div >
     <header >
         <div className="logo-container" >
           <img src="./img/logo.svg" alt="logo" />
           <h4 className="logo">three dots</h4>
         </div>
         <nav>
           <ul className="nav-links">
                  <li ><a className="nav-link" href="#">Specs</a></li>
                  <li ><a className="nav-link" href="#">Products</a></li>
                  <li ><a className="nav-link" href="#">Contacts</a></li>
           </ul>
         </nav>
         <div className="cart">
           <img src="./img/cart.svg" alt="cart" />
         </div>
     </header>
     <main>
       <section className="presentation">
         <div  className="introduction">
           <div className="intro-test">
              <h1>Laptop for the future</h1>
              <p>the new 14 inch bezeless display offering
                a 4k display with touch screen
              </p>
           </div>
           <div className="cta">
             <button className="cta-select">14 inch</button>
             <button className="cta-add">Add to cart</button>
             </div>
         </div>
         <div className="cover">
           <img src="./img/matebook.png" alt="matebook" />
         </div>
       </section>
     </main>
     </div>
    </>
  )
}

export default App

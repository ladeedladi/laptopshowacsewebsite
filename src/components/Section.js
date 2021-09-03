import React,{useState} from 'react'
import Playsong from './Playsong'


function Section() {
    const [playSong,setPLaySong]=useState(false)
    function play(){
setPLaySong(!playSong)
    }
    return (
        <>
        <section>
       <div className="image-wrapper">
        <div className="img"></div>
       </div>
       <div className="right-section">
          <h1>Feel the music</h1>
          <p>Not every band is Queen</p>
         
         {playSong ? <Playsong onClick={play}/>:<button onClick={play} className="btn">click</button>}
       </div>
    
     </section> 
        </>
    )
}

export default Section

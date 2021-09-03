import React,{useState} from 'react'
import Sound from "react-sound"
import Queen from "../mp3/killerQueen.mp3"
function Playsong(handleSongLoading,handleSongPlaying,handleSongFinishedPlaying) {
    const [state,setState]=useState(false)
    function stopNplay(){
        setState(!state)
    }
    return (
        <div>
            <button onClick={stopNplay} className="btn"> play</button>
           <Sound
           url={Queen}
           playFromPosition={300}
           playStatus={state?Sound.status.PLAYING:Sound.status.STOPPED}
           onLoading={handleSongLoading}
           onPlaying={handleSongPlaying}
           onFinishedPlaying={handleSongFinishedPlaying}
           />
        </div>
    )
}

export default Playsong

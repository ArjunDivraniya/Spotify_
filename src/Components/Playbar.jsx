
import './Playbar.css'
// import imag19 from './assets/imag11.png'
// import imag20 from '../assets/heart.png'
// import imag21 from  '../assets/Music Player Options.png'
// import imag22 from  '../assets/Right options.png'

function Playbar (){

    return(
<>
<div className="playbar">
    <div className="now" >
        <div className='now-image'><img src={imag19} alt=""/></div>
   <div className="name"><div>Dreming on</div>
   <div>NEFFEX</div></div>
   <div><img className='last' src={imag20} alt=""/></div>
    </div>
    <div className="playoption"><img src={imag21} alt="" /></div>
    <div className="lastimage"><img src={imag22} alt="" /></div>
</div>
<div className="green"><b>Listening on Asus Tuf Gaming F17</b></div>
    
</>
    )
}

export default Playbar
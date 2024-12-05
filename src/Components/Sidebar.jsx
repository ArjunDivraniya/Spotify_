import './Sidebar.css'
import logo from '../assets/Spotifylogo.png'
import imag1 from '../assets/Home.png'
import imag2 from '../assets/Search.png'
import imag3 from '../assets/your library.png'
import imag4 from '../assets/Create.png'
import imag5 from '../assets/Liked.png'
import imag6 from '../assets/your episodes.png'

function Sidebar(){
return(
<>

    
    <div className="sidebar">
      
      <div className="section">
         <div className="icon"></div> <div className="logo"><img src={logo}alt=""/></div>
    <div className="image"><img src={imag1} alt=""/><b>home </b> </div>
<div className="image"><img src={imag2} alt=""/><b>Search</b></div>   
<div className="image"><img src={imag3} alt="" />Your Library</div>
</div>
<div className="section">
   <div className="image"><img src={imag4} alt="" />Create Playlist</div> 
   <div className="image"><img src={imag5} alt=""/>Like Songs</div>
   <div className="image"><img src={imag6} alt=""/> Youre pisodes</div>
</div>
<div className="section">
    <div className="image"> FAV</div>
    <div className="image">Daily Mix 1</div>
    <div className="image">Discover Weekly</div>
    <div className="image">Malayalam</div>
    <div className="image">Dance/Electronic Mix</div>
    <div className="image">EDM/Popular</div>
    <div className="image"></div>


</div></div>

</>

)

}

export default Sidebar 
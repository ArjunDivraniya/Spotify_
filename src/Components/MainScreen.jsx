import './MainScreen.css'
import imag6 from '../assets/your episodes.png'
import imag7 from '../assets/top arrow navigation.png'
import imag8 from '../assets/image4.png'
import imag9 from '../assets/image3.png'

import imag10 from '../assets/image1.png'
import imag11 from '../assets/image2.png'
import imag12 from '../assets/image9.png'
import imag13 from '../assets/image8.png'
import imag14 from '../assets/image7.png'
import imag15 from '../assets/image6.png'
import imag16 from '../assets/image5.png'
import imag17 from '../assets/image10.png'
import imag18 from '../assets/User.png'

    function MainScreen(){
    const data =[
        { title:'Like songs',url:imag6 },
        { title:'Neffex laylist',url:imag8 },
        { title:'K/DA',url:imag9 },
        { title:'like songs',url:imag10 },
        { title:'Dance/ Elecronics Mix',url:imag11 },
    ]
    const artist=[
        {image:imag12,name:"Weekly Motivatio...",subname:"Ren ina Scott",id:1},
        {image:imag13,name:"MEDITATION SELF",subname:"Ren ina Scott",id:2},
        {image:imag14,name:"Words beyond act...",subname:"Ren ina Scott",id:3},
        {image:imag15,name:"The Alexa Show",subname:"Ren ina Scott",id:4},

        {image:imag16,name:"The Stories of Ma...",subname:"Ren ina Scott",id:5},
        {image:imag17,name:"Motivation Daily b...",subname:"Ren ina Scott",id:6}
    ]
    const even=artist.filter(i=>i.id%2==0);
    return(
<>
<div className='first'>
<div className="songs">
<div className="navbar">
    <div><img  src={imag7} alt=""/></div>
    <div><img src={imag18}  alt=""/></div>
</div>
<b className="text">Good morning</b>
<div className="box">
    
        {data.map((user)=> (
            <div className="song1" >
 <div><img src={user.url} alt=""/></div>
 <div className="songtext">{user.title}</div>
 </div>

       ) )}
   
</div>
   
<b className="text">Shows you might like</b>
<div className="artist">
    {even.map(i => (

        <div className="artistname">
        <div className="artistimage"><img src= {i.image} alt=""/></div>
        <div className="playlistname">{i.name}</div>
        <div className="subname">{i.subname}</div>

    </div>
    ))}
    
</div>

</div>
</div>

</>
    )
}

export default MainScreen
import "./works.scss"
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {worksData} from "../WorksData.jsx";
import {useState} from "react";

export default function Works() {
    const [slide, setSlide] = useState(0);

    function handleClick(direction){
      direction === "left" ?
      setSlide(slide == 0 ? 2 : slide -1) ://--slide doesn't work
      setSlide(slide == 2 ? 0 : slide +1)

    }
    return (
        <div className="works" id="works">
       
        
        <div className="wrapper" style={{ left:`-${slide * 100}vw` }}>
       
        
                  { worksData.map((data) =>{
                       return(
                        <div className="slider" >
                        <div className="container" >
                        <div className="left">
                    
                    {data.icon}
                    <h1>{data.title}</h1>
                    <p>{data.about}</p>
                    <h3>Projects</h3>

                    

                    </div>
                    <div className="right">

                    <img src={data.image} alt=""></img>
                        
                    </div>
                    </div>
                    </div>)

                   })}
                
            

       
           
        </div>
        <div className="lArrow" onClick={() =>{handleClick("left")}}><ArrowBackIosIcon classname="MuiSvgIcon-root"/></div>
        <div className="rArrow" onClick={() =>{handleClick("right")}}><ArrowForwardIosIcon  classname="MuiSvgIcon-root"/></div>     
        </div>
    )
}

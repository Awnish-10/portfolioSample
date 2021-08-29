import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';
import { useEffect ,useRef} from "react";

export default function Intro() {
    const iTypedText = useRef();
    useEffect(() => {
        init(iTypedText.current,  
            { showCursor: true,
                backDelay: 1500,
                backSpeed:60,
              strings: ['HTML', 'Css','JavaScript','React.js.' ] })
    }, [])//empty array useEffect works only one time . use effect works only if data elements inside array changes

    return (
        <div className="intro" id="intro">
         <div className="left">
            <div className="imageContainer">
                <img src="images/profile.jpg" alt=""></img>
            </div> 
         </div>
         <div className="right">
             <div className="wrapper">
                 <h2>Hi There, I'm </h2>
                 <h1>Awnish Negi</h1>
                 <h3>I am good with <span ref={iTypedText}></span></h3>
             </div>
             <a href="#portfolio"><ExpandMoreIcon /></a>
         </div>
            
        </div>
    )
}

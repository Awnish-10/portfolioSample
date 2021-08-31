import "./topbar.scss"
import{Person, Mail} from "@material-ui/icons"

export default function Topbar(props){
    return (
        <div className={"topbar " + (props.menu && "active")} >
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">.Portfolio</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+91 987654321</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>awnish.negi10@gmail.com</span>
                </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>{props.setMenu(!props.menu)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

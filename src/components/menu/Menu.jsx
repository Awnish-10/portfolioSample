import "./menu.scss"

export default function Menu({menu, setMenu}) {
    return (
        <div className={"menu " + (menu && "active")} id="menu">
            <ul>
                <li onClick={()=>{setMenu(!menu)}}> <a href="#intro">intro</a>  </li>
                <li onClick={()=>{setMenu(!menu)}}> <a href="#portfolio">portfolio</a>  </li>
                <li onClick={()=>{setMenu(!menu)}}> <a href="#works">works</a>  </li>
                <li onClick={()=>{setMenu(!menu)}}> <a href="#testimonials">testimonials</a>  </li>
                <li onClick={()=>{setMenu(!menu)}}> <a href="#contacts">contacts</a>  </li>
            </ul>
        </div>
    )
}

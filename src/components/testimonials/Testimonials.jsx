import "./testimonials.scss"
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Testimonials() {

    const data = [
        {
            id: 1,
            left:<SubdirectoryArrowRightIcon />,
            img:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            right: <TwitterIcon />,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "paul",
            work: "CEO webDev.net"
        },
        {
            id: 2,
            left:<SubdirectoryArrowRightIcon />,
            img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            right: <TwitterIcon />,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum",
            name: "Aony",
            work: "Model"
        },
        {
            id: 3,
            left:<SubdirectoryArrowRightIcon />,
            img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            right: <LinkedInIcon />,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum",
            name: "Max",
            work: "Sales Head"
        }
        
    ]
    
    return (
        <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>

        <div className="container">
        {data.map((item) =>{
            return(
                <div className={item.id == 2?"item featured":"item"}>
        <div className="content">
        <div className='top'>
        <div className="left">
        {item.left}
        </div>

        <div className="user">
        <img src={item.img} alt=""></img>

        </div>
        <div className="right">
        {item.right}

        </div>

        </div>
        <div className="mid">
        <p>{item.text}</p>

        </div>
        <div className="bottom">
        <h1>{item.name}</h1>
        <h3>{item.work}</h3>

        </div>
        </div>
        </div>

            )

        })}
        

        </div>
          
        </div>
    )
}

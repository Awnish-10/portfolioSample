import PortfolioItem from "../portfolioItem/PortfolioItem"
import { useState, useEffect } from "react";
import "./portfolio.scss"
import { featured, Projects, Hobbies, React} from "../PortfolioData";

export default function Portfolio() {
  const [state, setstate] = useState("Featured");
    const [data, setData] = useState([]);
    const list =[
        {
            id:"1",
            value:"Featured"
        },
        {
            id:"2",
            value:"Projects"
        },
        {
            id:"3",
            value:"Hobbies"
        },
        {
            id:"4",
            value:"React"
        }
    ]
    useEffect(() => {
     switch(state){
       case "Featured": setData(featured);
       break;
       case "Projects": setData(Projects);
       break;
       case "Hobbies": setData(Hobbies);
       break;
       case "React": setData(React);
       break;
       default: setData(featured)
     }
    }, [state])//when state changes useEffect executes

    
    
    function handleChange(value){
      setstate(value);
    }
    return (
        <div className="portfolio" id="portfolio">
            <div className="wrapper">
                <h1>Portfolio</h1>
                <ul>
                {list.map((item) => {
                    return(
                    <PortfolioItem 
                     key={item.id} 
                     item={item.value} 
                     active={state === item.value} 
                     handleClick={handleChange}/>
                )})}
                  
                </ul>

                <div className="imgContainer">
                {data.map((item) => {
                  return(
                    <div className="item">
                    <img src={item.img} alt=""></img>
                    <h3>{item.title}</h3>
                  </div>
                  )
                  
                })}
                  
                  
                  
                </div>
                

            </div>
        </div>
    )
}

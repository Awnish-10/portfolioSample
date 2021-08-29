import "./portfolioItem.scss";

export default function PortfolioItem(props) {
    return (
        <div>
            <li className={(props.active && "active")} onClick={()=>{props.handleClick(props.item)}}>{props.item}</li>
                    
        </div>
    )
}

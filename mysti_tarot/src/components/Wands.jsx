import { Link, useNavigate } from 'react-router-dom'

export default function Wands(props){

console.log(props)

    let navigate = useNavigate()
    const showWands = (index) => {
        navigate(`${index}`)
    }


if (props && props.wandsCard){
    return(
       <div>
    
        <h1>WANDS LIST</h1>
         <div className="cardContainer">
            {
                props.wandsCard.map((wands, index) => (
                    wands.suit === "wands" ?
                    <div key={index} className="card" onClick={() => showWands (index)}>
                        <h3 className="cardName">{wands.name}</h3>
                    </div>
                : null))
            }
         </div>
    
         <div>
             <Link to="/MinorLanding"><button>MINOR ARCANA</button></Link>
             <Link to="/MajorList"><button>MAJOR ARCANA</button></Link>
         </div>
       </div> 
    )

} else {
    return  <h1> Loading Please Wait </h1>
    
}

}
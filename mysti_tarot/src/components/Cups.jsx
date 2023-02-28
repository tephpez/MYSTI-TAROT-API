import { Link, useNavigate } from 'react-router-dom'

export default function Cups(props){

console.log(props)

    let navigate = useNavigate()
    const showCups = (index) => {
        navigate(`${index}`)
    }


if (props && props.cupsCard){
    return(
       <div>
    
        <h1>CUPS LIST</h1>
         <div className="cardContainer">
            {
                props.cupsCard.map((cups, index) => (
                    cups.suit === "cups" ?
                    <div key={index} className="card" onClick={() => showCups (index)}>
                        <h3 className="cardName">{cups.name}</h3>
                        
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
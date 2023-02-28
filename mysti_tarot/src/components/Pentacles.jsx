import { Link, useNavigate } from 'react-router-dom'

export default function Pentacles(props){

console.log(props)

    let navigate = useNavigate()
    const showPentacles = (index) => {
        navigate(`${index}`)
    }


if (props && props.pentaclesCard){
    return(
       <div>
    
        <h1>PENTACLES LIST</h1>
         <div className="cardContainer">
            {
                props.pentaclesCard.map((pentacles, index) => (
                    pentacles.suit === "pentacles" ?
                    <div key={index} className="card" onClick={() => showPentacles (index)}>
                        <h3 className="cardName">{pentacles.name}</h3>
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
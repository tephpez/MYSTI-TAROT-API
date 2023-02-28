import { Link, useNavigate } from 'react-router-dom'

export default function Swords(props){

console.log(props)

    let navigate = useNavigate()
    const showSwords = (index) => {
        navigate(`${index}`)
    }


if (props && props.swordsCard){
    return(
       <div>
    
        <h1>SWORDS LIST</h1>
         <div className="cardContainer">
            {
                props.swordsCard.map((swords, index) => (
                    swords.suit === "swords" ?
                    <div key={index} className="card" onClick={() => showSwords (index)}>
                        <h3 className="cardName">{swords.name}</h3>
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
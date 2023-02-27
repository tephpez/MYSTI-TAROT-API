import { Link, useNavigate } from 'react-router-dom'

export default function MajorList(props){

console.log(props)

    let navigate = useNavigate()
    const showMajor = (index) => {
        navigate(`${index}`)
    }


if (props && props.majCard){
    return(
       <div>
    
        <h1>MAJOR ARCANA</h1>
         <div className="cardContainer">
            {
                props.majCard.map((major, index) => (
                    <div key={index} className="card" onClick={() => showMajor(index)}>
                        <h3 className="cardName">{major.name}</h3>
                        {/* <h4>{major.desc} </h4>
                        <div id="upRevContainer">
                <div id="upContainer">
                    <span>UPRIGHT</span><br></br>
                    <h3 className="resultsText"> {major.meaning_up} </h3>
                </div>
                <div id="revContainer">
                    <span>REVERSED</span><br></br>
                    <h3 className="resultsText"> {major.meaning_rev} </h3>
                </div>
            </div> */}
                    </div>
                ))
            }
         </div>
    
         <div>
             <Link to="/MinorLanding"><button>MINOR ARCANA</button></Link>
         </div>
       </div> 
    )

} else {
    return  <h1> Loading Please Wait </h1>
    
}

}


// we have our cards mapped with all of our info 
// we want to make it so when we select a card we click and we see all the info
// map all cards with a background of a card.png put card name over it
// when we select a card we'll see all of it's information pop up



//////////////////////////////////////////////////////////////////////////////////////////////////////
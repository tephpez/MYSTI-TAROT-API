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
        <div id="titleSpacer"></div>


        <div className="titleContainer">
            <div className="titleText">
                <h1>WANDS</h1>
            </div>
        </div>    


        <div id="resultsPageContainer">
            {
                props.wandsCard.map((wands, index) => (
                    wands.suit === "wands" ?
                    <div id="resultsCard">
                        <div key={index} className="resultsContainer">
                            <h3 className="cardName">{wands.name}</h3>
                            <h3 id="upright">UPRIGHT</h3>
                            <h3 className="uprightText">{wands.meaning_up}</h3>
                            <h3 id="reversed">REVERSED</h3>
                            <h3 className="reversedText">{wands.meaning_rev}</h3>
                        </div>
                        <div className="seeFullContainer">
                            <button id="seeFull" onClick={() => showWands (index)}>SEE FULL DESCRIPTION</button>
                        </div>
                    </div>
                : null))
            }
         </div>

         <div className="redirectContainer">
            <Link to="/MinorLanding"><button className="redirectBtn">MINOR ARCANA</button></Link>
            <Link to="/MajorList"><button className="redirectBtn">MAJOR ARCANA</button></Link>
         </div>

       </div> 
    )

} else {
    return  <h1> Loading Please Wait </h1>
    
}

}




/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////
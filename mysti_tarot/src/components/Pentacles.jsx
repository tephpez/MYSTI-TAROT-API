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
        <div id="titleSpacer"></div>


        <div className="titleContainer">
            <div className="titleText">
                <h1>PENTACLES</h1>
            </div>
        </div>

        <div className="redirectContainer">
            <div className="redirectBtnsContainer">
                <Link to="/MinorLanding"><button className="redirectBtn">MINOR ARCANA</button></Link>
                <Link to="/MajorList"><button className="redirectBtn">MAJOR ARCANA</button></Link>
            </div>
         </div>

        <div className="resultsPageContainer">
                {
                    props.pentaclesCard.map((pentacles, index) => (
                        pentacles.suit === "pentacles" ?
                    
                    <div className="resultsCard">
                        <div key={index} className="resultsTextContainer">
                            <h3 className="cardName">{pentacles.name}</h3>
                            <h3 id="upright">UPRIGHT</h3>
                            <h3 className="upResults">{pentacles.meaning_up}</h3>
                            <h3 id="reversed">REVERSED</h3>
                            <h3 className="revResults">{pentacles.meaning_rev}</h3>
                        </div>
    
                        <div className="seeFullContainer">
                            <button className="seeFull" onClick={() => showPentacles (index)}>SEE FULL DESCRIPTION</button>
                        </div>
                    </div>
                : null))
            }
         </div>
       </div> 
    )

} else {
    return  <h1> Loading Please Wait </h1>
    
}

}


/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////
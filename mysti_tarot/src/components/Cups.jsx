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
        <div id="titleSpacer"></div>

 
        <div className="titleContainer">
            <div className="titleText">
                <h1>CUPS</h1>
            </div>
        </div>


        <div id="resultsPageContainer">
            {
                props.cupsCard.map((cups, index) => (
                    cups.suit === "cups" ?

                <div id="resultsCard">
                    <div key={index} className="resultsContainer">
                        <h3 className="cardName">{cups.name}</h3>
                        <h3 id="upright">UPRIGHT</h3>
                        <h3 className="uprightText">{cups.meaning_up}</h3>
                        <h3 id="reversed">REVERSED</h3>
                        <h3 className="reversedText">{cups.meaning_rev}</h3>
                    </div>

                    <div className="seeFullContainer">
                        <button id="seeFull" onClick={() => showCups (index)}>SEE FULL DESCRIPTION</button>
                    </div>

                </div>
                : null))
            }
        </div>


         <div className="redirectContainer">
            <Link to="/MajorList"><button className="redirectBtn">MAJOR ARCANA</button></Link>
            <Link to="/MinorLanding"><button className="redirectBtn">MINOR ARCANA</button></Link>
         </div>


       </div> 
    )

} else {
    return  <h1> Loading Please Wait </h1>
    
}

}


/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////
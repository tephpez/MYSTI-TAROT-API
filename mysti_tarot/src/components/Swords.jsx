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
            <div id="titleSpacer"></div>
        

        <div className="titleContainer">
            <div className="titleText">
                <h1>SWORDS</h1>
            </div>
        </div>



        <div className="resultsPageContainer">
            {
                props.swordsCard.map((swords, index) => (
                    swords.suit === "swords" ?

                <div className="resultsCard">
                    <div key={index} className="resultsTextContainer">
                        <h3 className="cardName">{swords.name}</h3>
                        <h3 id="upright">UPRIGHT</h3>
                        <h3 className="upResults">{swords.meaning_up}</h3>
                        <h3 id="reversed">REVERSED</h3>
                        <h3 className="revResults">{swords.meaning_rev}</h3>
                    </div>

                    <div className="seeFullContainer">
                        <button className="seeFull" onClick={() => showSwords (index)}>SEE FULL DESCRIPTION</button>
                    </div>
                </div>
                : null))
            }
         </div>
    
        <div className="redirectContainer">
                <Link to="/MinorLanding"><button className="linkBtn" id="redirectBtn">MINOR ARCANA</button></Link>
                <Link to="/MajorList"><button className="linkBtn" id="redirectBtn">MAJOR ARCANA</button></Link>
        </div>
       </div> 
    )

} else {
    return  <h1> Loading Please Wait </h1>
    
}

}

/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////
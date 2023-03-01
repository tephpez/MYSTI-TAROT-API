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
        <div id="titleSpacer"></div>

 
        <div className="titleContainer">
            <div className="titleText">
                <h1>MAJOR ARCANA</h1>
            </div>
        </div>

        <div className="redirectContainer">
            <div className="redirectBtnsContainer">
                <Link to="/MinorLanding"><button className="redirectBtn">MINOR ARCANA</button></Link>
            </div>
         </div>

        <div className="resultsPageContainer">
            {
                props.majCard.map((major, index) => (
                    major.type === "major" ?

                <div className="resultsCard">
                    <div key={index} className="resultsTextContainer">
                        <h3 className="cardName">{major.name}</h3>
                        <h3 id="upright">UPRIGHT</h3>
                        <h3 className="upResults">{major.meaning_up}</h3>
                        <h3 id="reversed">REVERSED</h3>
                        <h3 className="revResults">{major.meaning_rev}</h3>
                    </div>

                    <div className="seeFullContainer">
                        <button className="seeFull" onClick={() => showMajor (index)}>SEE FULL DESCRIPTION</button>
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

// we have our cards mapped with all of our info 
// we want to make it so when we select a card we click and we see all the info
// map all cards with a background of a card.png put card name over it
// when we select a card we'll see all of it's information pop up

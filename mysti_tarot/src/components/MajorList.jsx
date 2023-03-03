import { Link, useNavigate } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'

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
            
            <div id="titleContainer">
                <div id="titleText">
                    <span>MAJOR ARCANA</span>
                </div>
            </div>


            <div id="accPageContainer">
                <div id="accContainer">
                    {
                        props.majCard.map((major, index) => (
                            major.type === "major" ?

                        <div id="accResultsCard">
                            
                            <Accordion defaultActiveKey={index} alwaysopen>
                                <AccordionItem eventKey={major} id="">
                                    <AccordionHeader>{major.name}</AccordionHeader>
                                    <AccordionBody>
                                        <div id="upRevDivContainer">
                                            <div id="upRevResults">
                                                <p id="accTitle">UPRIGHT MEANING</p>
                                                <p id="accResultsText">{major.meaning_up}</p>      {/* REMOVE ID AND ADJUST CSS ACCORDINGLY */}
                                            </div>
                                            <div id="upRevResults">
                                                <p id="accTitle">REVERSED MEANING</p>
                                                <p id="accResultsText">{major.meaning_rev}</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                            <div id="descResults">
                                                <p id="accTitle">DESCRIPTION</p>
                                                <p id="accResultsText">{major.desc}</p>
                                            </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    : null))
                    }
                    </div>
                </div> 
                <div id="redirectContainer">
                    <Link to="/MinorLanding"><button className="linkBtn" id="redirectBtn">MINOR ARCANA</button></Link>
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

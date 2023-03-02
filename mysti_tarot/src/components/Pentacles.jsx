import { Link, useNavigate } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'

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
        <div id="titleContainer">
            <div id="titleText">
                <span>PENTACLES</span>
            </div>
        </div>



        <div id="accPageContainer">
            <div id="accContainer">
                {
                    props.pentaclesCard.map((pentacles, index) => (
                        pentacles.suit === "pentacles" ?
                    
                        <div id="accResultsCard">
                             <Accordion defaultActiveKey={index} alwaysopen>
                                <AccordionItem eventKey={pentacles} id="">
                                    <AccordionHeader>{pentacles.name}</AccordionHeader>
                                    <AccordionBody>
                                    <div id="upRevDivContainer">
                                            <div id="upRevResults">
                                                <p id="accTitle">UPRIGHT MEANING</p>
                                                <p id="accResultsText">{pentacles.meaning_up}</p>      {/* REMOVE ID AND ADJUST CSS ACCORDINGLY */}
                                            </div>
                                            <div id="upRevResults">
                                                <p id="accTitle">REVERSED MEANING</p>
                                                <p id="accResultsText">{pentacles.meaning_rev}</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                            <div id="descResults">
                                                <p id="accTitle">DESCRIPTION</p>
                                                <p id="accResultsText">{pentacles.desc}</p>
                                            </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                    </div>
                : null))
            }
         </div>        
         <div id="redirectContainer">
                <Link to="/MinorLanding"><button className="linkBtn" id="redirectBtn">MINOR ARCANA</button></Link>
                <Link to="/MajorList"><button className="linkBtn" id="redirectBtn">MAJOR ARCANA</button></Link>
         </div>
       </div> 
    </div>
    )

} else {
    return  <h1> Loading Please Wait </h1>
    
}

}


/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////
import { Link, useNavigate } from 'react-router-dom'
import { Accordion, Card } from 'react-bootstrap'
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

 
        <div className="titleContainer">
            <div className="titleText">
                <h1>MAJOR ARCANA</h1>
            </div>
        </div>


        <div>
            {
                props.majCard.map((major, index) => (
                    major.type === "major" ?

                <div className="resultsCard">
                    
                    <Accordion defaultActiveKey={index} alwaysopen>
                        <AccordionItem eventKey={major} id="">
                            <AccordionHeader> {major.name}</AccordionHeader>
                            <AccordionBody>
                                <ul>
                                    <li>{major.meaning_up}</li>
                                    <li>{major.meaning_rev}</li>
                                    <li>{major.desc}</li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>

                </div>
                : null))
            }
         </div>
                    <div className="redirectContainer">
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

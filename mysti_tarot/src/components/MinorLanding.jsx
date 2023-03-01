import { Link } from 'react-router-dom'
import Cups from './Cups'
import Swords from './Swords'
import Pentacles from './Pentacles'
import Wands from './Wands'
import MajorList from './MajorList'


export default function MinorLanding(){
    
    return(

    <div id="landingContainer">
        <div id="titleSpacer"></div>

        <div className="titleContainer">
            <div className="titleText">
                <h4>MINOR ARCANA</h4>
            </div>
        </div>


        <div className="pageContainer" id="minorOptionsPgContainer">

            <div className="optionCard" id="minorOptionCard">
                <div>
                    <Link to="/Cups" element={<Cups/>}><button className="linkBtn" id="minorLinkBtn">CUPS</button></Link>
                </div>

                <img className="cardImg" src="https://i.imgur.com/3Pta42t.png"></img>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Cups deal with the emotional level of consciousness and are associated with love, feelings, relationships and connections.</h5>                
                </div>
            </div>

            <div className="optionCard" id="minorOptionCard">
                <div>
                    <Link to="/Swords" element={<Swords/>}><button className="linkBtn" id="minorLinkBtn">SWORDS</button></Link> 
                </div>

                <img className="cardImg" src="https://i.imgur.com/Axp5Ml6.png"></img>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Swords deal with the mental level of consciousness that is centered around the mind and the intellect. </h5>
                </div>
            </div>
       
            <div className="optionCard" id="minorOptionCard">
                <div>
                    <Link to="/Pentacles" element={<Pentacles/>}><button className="linkBtn" id="minorLinkBtn">PENTACLES</button></Link> 
                </div>

                <img className="cardImg" src="https://i.imgur.com/GFuU2jZ.png"></img>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Pentacles deal with the physical or external level of consciousness and thus mirror the outer situations of your health, finances, work, and creativity. </h5>                
                </div>
            </div>
       
            <div className="optionCard" id="minorOptionCard">
                <div>
                    <Link to="/Wands" element={<Wands/>}><button className="linkBtn" id="minorLinkBtn">WANDS</button></Link> 
                </div>

                <img className="cardImg" src="https://i.imgur.com/NNf9nYa.png"></img>
                
                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Wands deal with primal energy, spirituality, inspiration, determination, strength, intuition, creativity, ambition and expansion, original thought and the seeds through which life springs forth.</h5>                
                </div>
            </div>
        </div>
        <div className="redirectContainer">
                <Link to="/MajorList" element={<MajorList/>}><button className="linkBtn" id="redirectBtn">MAJOR ARCANA</button></Link>
        </div>
    </div>
    )
}


/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////
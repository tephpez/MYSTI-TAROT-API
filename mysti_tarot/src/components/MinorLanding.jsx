import { Link } from 'react-router-dom'
import Cups from './Cups'
import Swords from './Swords'
import Pentacles from './Pentacles'
import Wands from './Wands'


export default function MinorLanding(){
    
    return(

    <div>
        <div id="titleSpacer"></div>

        <div id="titleContainer">
            <div id="titleText">
                <span>MINOR ARCANA</span>
            </div>
        </div>


        <div className="pageContainer">
            <div className="optionCard">
                <div>
                    <Link to="/Cups" element={<Cups/>}><button className="linkBtn" id="minorOptionBtntn">CUPS</button></Link>
                </div>

                <div id="imgCircle">
                    <img className="cardImg" id="minorCardImg" src="https://i.imgur.com/asHuyas.png"></img>
                </div>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Cups deal with the emotional level of consciousness and are associated with love, feelings, relationships and connections.</h5>                
                </div>
            </div>

            <div className="optionCard">
                <div>
                    <Link to="/Swords" element={<Swords/>}><button className="linkBtn" id="minorOptionBtntn">SWORDS</button></Link> 
                </div>

                <div id="imgCircle">
                    <img className="cardImg" id="minorCardImg" src="https://i.imgur.com/vZ9BoY0.png"></img>
                </div>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Swords deal with the mental level of consciousness that is centered around the mind and the intellect. </h5>
                </div>
            </div>
       
            <div className="optionCard">
                <div>
                    <Link to="/Pentacles" element={<Pentacles/>}><button className="linkBtn" id="minorOptionBtntn">PENTACLES</button></Link> 
                </div>

                <div id="imgCircle">
                    <img className="cardImg" id="minorCardImg" src="https://i.imgur.com/uo0BBW6.png"></img>
                </div>
                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Pentacles deal with the physical or external level of consciousness and thus mirror the outer situations of your health, finances, work, and creativity. </h5>                
                </div>
            </div>
       
            <div className="optionCard">
                <div>
                    <Link to="/Wands" element={<Wands/>}><button className="linkBtn" id="minorOptionBtntn">WANDS</button></Link> 
                </div>

                <div id="imgCircle">
                    <img className="cardImg" id="minorCardImg" src="https://i.imgur.com/KQqZtEM.png"></img>
                </div>
                <div className="blurbContainer">
                    <h5 className="optionBlurb">The Suit of Wands deal with primal energy, spirituality, inspiration, determination, strength, intuition, creativity, ambition and expansion, original thought and the seeds through which life springs forth.</h5>                
                </div>
            </div>
        </div>
        
        <div id="redirectContainer">
                <Link to="/MajorList"><button className="linkBtn" id="redirectBtn">MAJOR ARCANA</button></Link>
        </div>
    </div>
    )
}


/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////
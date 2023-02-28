import { Link } from 'react-router-dom'
import Cups from './Cups'
import Swords from './Swords'
import Pentacles from './Pentacles'
import Wands from './Wands'
import MajorList from './MajorList'


export default function MinorLanding(){
    
    return(

    <div>
        <div id="titleSpacer"></div>

        <div className="titleContainer">
            <div className="titleText">
                <h1>MINOR ARCANA</h1>
            </div>
        </div>


        <div id="optionsPageContainer">
            <div id="optionCard">
                <img className="cardImg" src="https://i5.walmartimages.com/asr/53297b03-f8fe-4930-890d-b44386219b75_1.bfcc8e3644bce7f5e51a102d231613bc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"></img>
                <h3 className="optionTitle">CUPS</h3>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">cups blurb goes here</h5>                
                </div>

                <div>
                    <Link to="/Cups" element={<Cups/>}><button className="selectBtn">select</button></Link>
                </div>
            </div>

            <div id="optionCard">
                <img className="cardImg" src="https://i5.walmartimages.com/asr/53297b03-f8fe-4930-890d-b44386219b75_1.bfcc8e3644bce7f5e51a102d231613bc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"></img>
                <h3 className="optionTitle">SWORDS</h3>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">swords blurb goes here</h5>                
                </div>

                <div>
                    <Link to="/Swords" element={<Swords/>}><button className="selectBtn">select</button></Link> 
                </div>
            </div>
       
            <div id="optionCard">
                <img className="cardImg" src="https://i5.walmartimages.com/asr/53297b03-f8fe-4930-890d-b44386219b75_1.bfcc8e3644bce7f5e51a102d231613bc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"></img>
                <h3 className="optionTitle">PENTACLES</h3>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">pentacles blurb goes here</h5>                
                </div>

                <div>
                    <Link to="/Pentacles" element={<Pentacles/>}><button className="selectBtn">select</button></Link> 
                </div>
            </div>
       
            <div id="optionCard">
                <img className="cardImg" src="https://i5.walmartimages.com/asr/53297b03-f8fe-4930-890d-b44386219b75_1.bfcc8e3644bce7f5e51a102d231613bc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"></img>
                <h3 className="optionTitle">WANDS</h3>
                
                <div className="blurbContainer">
                    <h5 className="optionBlurb">wands blurb goes here</h5>                
                </div>

                <div>
                    <Link to="/Wands" element={<Wands/>}><button className="selectBtn">select</button></Link> 
                </div>
            </div>
        </div>



        <div className="redirectContainer">
            <Link to="/MajorList" element={<MajorList/>}><button className="redirectBtn">MAJOR ARCANA</button></Link>
        </div>
    </div>
    )
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
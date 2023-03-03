


import { Link } from 'react-router-dom'


export default function Spread3(){

    return(
        <div>
            <div id="titleSpacer"></div>
            <div id="titleContainer">
                <div id="titleText">
                    <span id="landingTitle"> PROBLEM ‎ ‎ ‎  • ‎ ‎ ‎ CAUSE ‎ ‎ ‎  • ‎ ‎ ‎  SOLUTION </span>
                    </div>
            </div>

            <div className="pageContainer" id="spread3PageContainer"> 

                <div className="divStackCards3">
                        <img id="cardImg3" src="https://i.imgur.com/Gh5ANXh.png" alt="PROBLEM"></img>
                        {/* onClick={handleImageClick}  */}
                        <img id="cardImg3" src="https://i.imgur.com/uo0BBW6.png" alt="CAUSE"></img>
                        <img id="cardImg3" src="https://i.imgur.com/uo0BBW6.png" alt="SOLUTION"></img>
                </div>
            
                <div className="divStackBlurbs3">
                    <div className="blurbContainer" id="cardBlurb3">    
                        <h5 className="optionBlurb">PROBLEM BLURB</h5>
                    </div>
                    <div className="blurbContainer" id="cardBlurb3">    
                        <h5 className="optionBlurb">CAUSE BLURB</h5>
                    </div>
                    <div className="blurbContainer" id="cardBlurb3">    
                        <h5 className="optionBlurb">SOLUTION BLURB</h5>
                    </div>
                </div>

            </div>
            <div id="redirectContainer">
                    <Link to="/Spread3"><button className="linkBtn" id="redirectBtn">RESET</button></Link> 
            </div> 
        </div>
    )
}

/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////

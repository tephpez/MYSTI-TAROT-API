import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import WelcomeModal from './WelcomeModal'

export default function Spread1(){
    
    
    return(
        <div>

            <div id="titleSpacer"></div>
            <div id="titleContainer">
                <div id="titleText">
                    <h4> • ‎ ORACLE PULL ‎ • </h4>
                </div>
            </div>

            <div className="pageContainer" id="spread1PageContainer"> 
    <div>
        <WelcomeModal/>
    </div>

                <div className="divStack">
                    <div className="optionCard">
                        <img id="cardImg1" src="https://i.imgur.com/Gh5ANXh.png" alt="PULL"></img>
                        {/* onClick={handleImageClick}  */}
                    </div>
                </div>
            
                <div className="divStack">
                    <div className="blurbContainer">    
                        <h5 className="optionBlurb">PULL</h5>
                    </div>
                </div>

            </div>
            <div id="redirectContainer">
                    <Link to="/Spread1"><button className="linkBtn" id="redirectBtn">RESET</button></Link> 
            </div> 
        </div>
    )
}
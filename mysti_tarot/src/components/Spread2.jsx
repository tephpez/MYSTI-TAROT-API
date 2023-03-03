import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import WelcomeModal from './WelcomeModal'


export default function Spread2(){
    

    return(
        <div>
            <div>
                <WelcomeModal/>
            </div>
            <div id="titleSpacer"></div>
            <div id="titleContainer">
                <div id="titleText">
                    <span id="landingTitle">PULL ‎ ‎ ‎ •  ‎ ‎ ‎  PURGE</span>
                    </div>
            </div>

            <div className="pageContainer" id="spread2PageContainer"> 
                <div id="divStackContainer">
                    <div className="divStack2">
                        <div className="blurbContainer" id="cardBlurb2-1">    
                            <h5 className="optionBlurb">PULL</h5>
                            </div>
                        <img id="cardImg2" src="https://i.imgur.com/Gh5ANXh.png" alt="PULL"></img>
                    </div>
                    <div className="divStack2">
                        <img id="cardImg2" src="https://i.imgur.com/uo0BBW6.png" alt="PURGE"></img>
                        <div className="blurbContainer" id="cardBlurb2-2">    
                            <h5 className="optionBlurb">PURGE</h5>
                            </div>
                    </div>
                </div>
            </div>
            <div id="redirectContainer">
                <Link to="/Spread2"><button className="linkBtn" id="redirectBtn">RESET</button></Link> 
                </div> 
        




        </div>
    )
}


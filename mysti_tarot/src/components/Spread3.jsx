import { Link } from 'react-router-dom'
import { useState } from 'react'



export default function Spread3(){
 
    return(
        <div>
        <div id="titleSpacer"></div>

        <div className="titleContainer">
            <div className="titleText">
                <h4 id="landingTitle"> PROBLEM  •  CAUSE  •  SOLUTION </h4>
            </div>
        </div>


        <div className="optionsPageContainer" id="spreadPageContainer"> 

            <div className="optionCard" id="spreadCard">

                <img id="cardImg3" src="https://i.imgur.com/Gh5ANXh.png"></img>
                
                <div className="blurbContainer">    
                    <h5 className="optionBlurb">oracle blurb goes here</h5>
                </div>

            </div>

            <div className="optionCard" id="spreadCard">

                <img id="cardImg3" src="https://i.imgur.com/uo0BBW6.png"></img>

                <div className="blurbContainer">    
                    <h5 className="optionBlurb">One card represents what you need to pull into your life, the second, what you need to purge.</h5>
                </div>

            </div>

            <div className="optionCard" id="spreadCard">

              <img id="cardImg3" src="https://i.imgur.com/asHuyas.png"></img>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">problem/cause/solution blurb goes here</h5>
                </div>

            </div>
        </div>

        {/* <div className="redirectContainer"><h1> </h1></div> */}
    </div>


    )
}






// PROBLEM - CAUSE - SOLUTION
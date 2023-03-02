import { Link } from "react-router-dom";

export default function Main () {

    return (

    <div>
        <div id="titleSpacer"></div>

        <div id="titleContainer">
            <div id="titleText">
                <span>CHOOSE YOUR SPREAD</span>
            </div>
        </div>


        <div className="pageContainer"> 
            <div className="optionCard">
                <div>
                    <Link to="/Spread1"><button className="linkBtn" id="mainOptionBtn">ORACLE<br></br>SPREAD</button></Link>
                </div>

                <div id="imgCircle">
                    <img className="cardImg" id="mainCardImg" src="https://i.imgur.com/asHuyas.png"></img>
                </div>
                
                <div className="blurbContainer">    
                    <h5 className="optionBlurb">oracle blurb goes here</h5>
                </div>
            </div>

            <div className="optionCard">

                <div>
                    <Link to="/Spread2"><button className="linkBtn" id="mainOptionBtn"> PULL //<br></br> PURGE </button></Link>
                </div>

                <div id="imgCircle">
                    <img className="cardImg" id="mainCardImg" src="https://i.imgur.com/vZ9BoY0.png"></img>
                </div>

                <div className="blurbContainer">    
                    <h5 className="optionBlurb">One card represents what you need to pull into your life, the second, what you need to purge.</h5>
                </div>
            </div>

            <div className="optionCard">

                <div>
                    <Link to="/Spread3"><button className="linkBtn" id="mainOptionBtn">PROBLEM //<br></br>CAUSE // SOLUTION</button></Link>
                </div>
                
                <div id="imgCircle">
                    <img className="cardImg" id="mainCardImg" src="https://i.imgur.com/uo0BBW6.png"></img>
                </div>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">problem/cause/solution blurb goes here</h5>
                </div>

            </div>
        </div>
        
        <div id="redirectContainer">
            <h1></h1>
        </div>

    </div>


    )
}

/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////


// WHY AREN'T MY IMAGES WORKING? WRONG PATH? */}
{/* <img src="../assets/CARD2.png"></img><br></br> */}


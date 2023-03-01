import { Link } from "react-router-dom";

export default function Main () {

    return (

    <div>
        <div id="titleSpacer"></div>

        <div className="titleContainer">
            <div className="titleText">
                <h1 id="landingTitle">CHOOSE YOUR SPREAD</h1>
            </div>
        </div>


        <div className="optionsPageContainer"> 

            <div className="optionCard" id="spreadCard">
                <h3 className="optionTitle">ORACLE<br></br>SPREAD</h3>
                <img className="cardImg" id="spreadCardImg" src="https://i.imgur.com/GFuU2jZ.png"></img>
                
                <div className="blurbContainer">    
                    <h5 className="optionBlurb">oracle blurb goes here</h5>
                </div>

                <div>
                    <Link to="/Spread1"><button className="selectBtn">SELECT</button></Link>
                </div>
            </div>

            <div className="optionCard" id="spreadCard">
                <h3 className="optionTitle">PULL/<br></br>PURGE</h3>
                <img className="cardImg" id="spreadCardImg" src="https://i.imgur.com/3Pta42t.png"></img>

                <div className="blurbContainer">    
                    <h5 className="optionBlurb">One card represents what you need to pull into your life, the second, what you need to purge.</h5>
                </div>

                <div>
                    <Link to="/Spread1"><button className="selectBtn">SELECT</button></Link>
                </div>
            </div>

            <div className="optionCard" id="spreadCard">
                <h3 className="optionTitle">PROBLEM/<br></br>CAUSE/SOLUTION</h3>
              <img className="cardImg" id="spreadCardImg" src="https://i.imgur.com/Axp5Ml6.png"></img>

                <div className="blurbContainer">
                    <h5 className="optionBlurb">problem/cause/solution blurb goes here</h5>
                </div>

                <div>
                    <Link to="/Spread1"><button className="selectBtn">SELECT</button></Link>
                </div>
            </div>
        </div>

        {/* <div className="redirectContainer"><h1> </h1></div> */}
    </div>


    )
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////
{/* // <Link to="/Spread1"><button>select reading</button></Link>
// <Link to="/Spread2"><button>select reading</button></Link>
// <Link to="/Spread3"><button>select reading</button></Link> */}
{/* 

// WHY AREN'T MY IMAGES WORKING? WRONG PATH? */}
{/* <img src="../assets/CARD2.png"></img><br></br> */}


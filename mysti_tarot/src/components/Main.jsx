import { Link } from "react-router-dom";

export default function Main () {

    return (
        <div id="optionsPageContainer"> 
            <div>
                <h3 className="optionTitle">ORACLE<br></br>SPREAD</h3>
                
                <div>
                    <img className="cardImg" src="https://media.pixajoy.com/assets/theme-template/PLAYINGCARD/PKP3524/123/theme.jpg"></img><br></br>
                </div>

                <div className="blurbContainer">    
                    <h5 className="optionBlurb">oracle blurb goes here</h5>
                </div>
                <div>
                    <Link to="/Spread1"><button className="selectBtn">SELECT</button></Link>
                </div>

            </div>

            <div>
                <h3 className="optionTitle">IN/OUT<br></br>SPREAD</h3>

                <div>
                    <img className="cardImg" src="https://robertlovespi.files.wordpress.com/2016/01/bigslick.jpg?w=584"></img><br></br>
                </div>
                <div className="blurbContainer">    
                    <h5 className="optionBlurb">in/out blurb goes here</h5>
                </div>
                <div>
                    <Link to="/Spread1"><button className="selectBtn">SELECT</button></Link>
                </div>

            </div>

            <div>
                <h3 className="optionTitle">PROBLEM/CAUSE/<br></br>SOLUTION SPREAD</h3>

                <div>
                    <img className="cardImg" src="https://i5.walmartimages.com/asr/53297b03-f8fe-4930-890d-b44386219b75_1.bfcc8e3644bce7f5e51a102d231613bc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"></img><br></br>
                </div>
                <div className="blurbContainer">
                    <h5 className="optionBlurb">problem/cause/solution blurb goes here</h5>
                </div>
                <div>
                    <Link to="/Spread1"><button className="selectBtn">SELECT</button></Link>
                </div>

            </div>
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


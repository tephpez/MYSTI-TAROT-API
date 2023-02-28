import { Link } from "react-router-dom";

export default function Main () {

    return (
        <div id="spreadContainer"> 
            <div classname="spreadSlot" id="spreadsSelection">
                <div className="spreadCardContainer" id="oneCard">
                    <div>
                        <h3>ORACLE<br></br>PULL</h3><br></br>
                        <img src="../assets/CARD2.png"></img><br></br>
                        <h4>ORACLE BLURB</h4>
                    </div>
                </div>

                <div className="spreadCardContainer" id="twoCard">
                    <h3>IN/OUT<br></br>PULL</h3>
                    <img src="../assets/CARD2.png"></img><br></br>
                    <h4>ORACLE BLURB</h4>
                </div>

                <div className="spreadCardContainer" id="threeCard">
                    <h3>PROBLEM/CAUSE/<br></br>SOLUTION PULL</h3>
                    <img src="../assets/CARD2.png"></img><br></br>
                    <h4>ORACLE BLURB</h4>
                </div><br></br>
                <div>
                </div>
            </div>
        </div>
    )
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////
// <Link to="/Spread1"><button>select reading</button></Link>
// <Link to="/Spread2"><button>select reading</button></Link>
// <Link to="/Spread3"><button>select reading</button></Link>
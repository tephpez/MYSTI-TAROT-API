import { Link } from "react-router-dom";

export default function Main () {

    return (
        <div id="mainContainer"> 
            <div id="spreadsSelection">
                <div id="cardContainer1">
                    <h3>SPREAD 1</h3>
                    <Link to="/Spread1"><button>select reading</button></Link>
                </div>
                <div id="cardContainer2">
                    <h3>SPREAD 2</h3>
                    <Link to="/Spread2"><button>select reading</button></Link>
                </div>
                <div id="cardContainer3">
                    <h3>SPREAD 3</h3>
                    <Link to="/Spread3"><button>select reading</button></Link>
                </div>
            </div>
        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
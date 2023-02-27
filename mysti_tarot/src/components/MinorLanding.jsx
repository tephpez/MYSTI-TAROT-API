import { Link } from 'react-router-dom'


export default function Minor(){
    
    return(
        <div>
        <div>THIS IS THE MINOR ARCANA PAGE</div>
            <div id="cups">
                <h3>CUPS</h3>
                <Link to="/Cups"><button>select</button></Link>
            </div>
            <div id="swords">
                <h3>SWORDS</h3>
                <Link to="/Swords"><button>select</button></Link> 
            </div>
            <div id="pentacles">
                <h3>PENTACLES</h3>
                <Link to="/Pentacles"><button>select</button></Link> 
            </div>
            <div id="wands">
                <h3>WANDS</h3>
                <Link to="/Wands"><button>select</button></Link> 
            </div>
        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
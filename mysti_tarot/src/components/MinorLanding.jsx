import { Link } from 'react-router-dom'
import Cups from './Cups'
import Swords from './Swords'
import Pentacles from './Pentacles'
import Wands from './Wands'

export default function Minor(){
    




    return(
        <div>
        <div>THIS IS THE MINOR LANDING PAGE</div>
            <div id="cups">
                <h3>CUPS</h3>
                <Link to="/Cups" element={<Cups/>}><button>select</button></Link>
            </div>
            <div id="swords">
                <h3>SWORDS</h3>
                <Link to="/Swords" element={<Swords/>}><button>select</button></Link> 
            </div>
            <div id="pentacles">
                <h3>PENTACLES</h3>
                <Link to="/Pentacles" element={<Pentacles/>}><button>select</button></Link> 
            </div>
            <div id="wands">
                <h3>WANDS</h3>
                <Link to="/Wands" element={<Wands/>}><button>select</button></Link> 
            </div>
        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////


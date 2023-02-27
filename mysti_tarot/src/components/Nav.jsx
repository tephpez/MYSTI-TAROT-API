import { Link } from 'react-router-dom'

import Learn from './Learn'
import About from './About'

export default function Nav(){
    
    return(
        <div id="navBar">
            <div id="leftLinks">
                <Link to="/Learn" element={<Learn/>}><button className="navButton" id="learnBtn">learn</button></Link>
                <Link to="/"><button className="navButton" id="spreadsBtn">spreads</button></Link>
            </div>
            <span id="mysti">MYSTI</span>
            <div id="rightLinks">
              <Link to="/About"><button className="navButton" id="aboutBtn">about</button></Link>
            </div>
        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
import { Link } from 'react-router-dom'

import Learn from './Learn'
import About from './About'


export default function Nav(){
    
    return(
        <div id="navBar">
            <div id="leftLinks">
                <Link to="/Learn" element={<Learn/>}><button className="navBtn" id="learnBtn">learn</button></Link>
                <Link to="/"><button className="navBtn" id="spreadsBtn">spreads</button></Link>
            </div>
            <div>
                <h1 id="mysti">MYSTI</h1>
            </div>
            <div id="rightLinks">
              <Link to="/About" element={<About/>}><button className="navBtn" id="aboutBtn">about</button></Link>
            </div>
        </div>
    )
}

/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////


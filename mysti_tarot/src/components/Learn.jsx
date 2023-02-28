import { Link } from 'react-router-dom'
import MajorList from './MajorList'
import MinorLanding from './MinorLanding'


export default function Learn(){

    return(
        <div> 
            <div>THIS IS THE LEARN PAGE</div>
            <div id="majorArcana">
                <h3>MAJOR ARCANA</h3>
                <Link to="/MajorList" element={<MajorList/>}><button>select</button></Link>
            </div>
            <div id="minorArcana">
                <h3>MINOR ARCANA</h3>
                <Link to="/MinorLanding" element={<MinorLanding/>}><button>select</button></Link> 
            </div>
        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
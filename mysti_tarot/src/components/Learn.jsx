import { Link } from 'react-router-dom'
import MajorList from './MajorList'
import MinorLanding from './MinorLanding'


export default function Learn(){

    return(
        <div>
            <div id="titleSpacer"></div>

            <div id="titleContainer">
                <div id="titleText">
                    <span>CHOOSE A CATEGORY</span>
                </div>   
            </div>    

            <div className="pageContainer"> 

                <div className="optionCard" id="learnOptionCard">
                    <div>
                        <Link to="/MajorList"><button className="linkBtn" id="mainOptionBtn">MAJOR<br></br> ARCANA</button></Link>
                    </div>

                    <div id="imgCircle">
                        <img className="cardImg" id="learnCardImg" src="https://i.imgur.com/1NWmH5R.png"></img>
                    </div>

                
                    <div className="blurbContainer">
                        <h5 className="optionBlurb">These cards represent a path to spiritual self-awareness and depict the various stages we encounter as we search for greater meaning and understanding.</h5>
                    </div>
                </div>
        
                <div className="optionCard" id="learnOptionCard">

                    <div>
                        <Link to="/MinorLanding"><button className="linkBtn" id="mainOptionBtn">MINOR<br></br> ARCANA</button></Link>                         
                    </div>

                    <div id="imgCircle">
                        <img className="cardImg" id="learnCardImg" src="https://i.imgur.com/Gh5ANXh.png"></img>
                    </div>

                    <div className="blurbContainer">
                        <h5 className="optionBlurb">These Tarot cards highlight the more practical aspects of life and can refer to current issues that have a temporary or minor influence.</h5>
                    </div>

                </div>
            </div>
            <div id="redirectContainer">
            </div>
        </div>

    )
}

/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE ISSUES 


import { Link } from 'react-router-dom'
import MajorList from './MajorList'
import MinorLanding from './MinorLanding'


export default function Learn(){

    return(
        <div id="optionsPageContainer"> 

            <div id="arcanaContainer">
                <h3 className="optionTitle">MAJOR<br></br>ARCANA</h3>

                <div>
                    <img className="cardImg" src="https://media.pixajoy.com/assets/theme-template/PLAYINGCARD/PKP3524/123/theme.jpg"></img>
                </div>
                <div className="blurbContainer">
                    <h5 className="optionBlurb">major arcana blurb goes here</h5>
                </div>
                <div>
                    <Link to="/MajorList" element={<MajorList/>}><button className="selectBtn">SELECT</button></Link>
                </div>
            </div>
            
            <div id="arcanaContainer">
                <h3 className="optionTitle">MINOR<br></br>ARCANA</h3>

                <div>
                    <img className="cardImg" src="https://robertlovespi.files.wordpress.com/2016/01/bigslick.jpg?w=584"></img>
                </div>
                <div className="blurbContainer">
                    <h5 className="optionBlurb">minor arcana blurb goes here</h5>
                </div>
                <div>
                    <Link to="/MinorLanding" element={<MinorLanding/>}><button className="selectBtn">SELECT</button></Link> 
                </div>
            </div>

        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
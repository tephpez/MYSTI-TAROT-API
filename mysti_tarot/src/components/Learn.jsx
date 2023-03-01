import { Link } from 'react-router-dom'
import MajorList from './MajorList'
import MinorLanding from './MinorLanding'


export default function Learn(){

    return(
        <div>
            <div id="titleSpacer"></div>

            <div className="titleContainer">
            <div className="titleText">
                <h1>CHOOSE A CATEGORY</h1>
            </div>
        </div>

        {/* <div className="redirectContainer" id="learnRedirectContainer"></div> */}
            


            <div className="optionsPageContainer"> 
                <div>
                    <div className="optionCard" id="arcanaCard">
                        <div>
                            <Link to="/MajorList" element={<MajorList/>}><button className="linkBtn">MAJOR ARCANA</button></Link>
                        </div>

                        <div className="arcanaImgContainer">
                            <img id="arcanaCardImg" src="https://i.imgur.com/7jS1bC5.png"></img>
                        </div>
                    </div>
                
                    <div className="blurbContainer" id="arcanaBlurbContainer">
                        <h5 className="optionBlurb">These cards represent life's karmic and spiritual lessons. 
                                                    They represent a path to spiritual self-awareness and depict the various stages we encounter as we search for greater meaning and understanding. <br></br>
                                                    In this way, the Major Arcana cards hold deeply meaningful lessons on a soul level.</h5>
                    </div>


                </div>
                <div>
                    <div className="optionCard" id="arcanaCard">
                        <div>
                            <Link to="/MinorLanding" element={<MinorLanding/>}><button className="linkBtn">MINOR ARCANA</button></Link>                         </div>
                        <div id="arcanaImgContainer">
                            <img id="arcanaCardImg" src="https://i.imgur.com/IZHv1yy.png"></img>
                        </div>
                    </div>

                    <div className="blurbContainer" id="arcanaBlurbContainer">
                        <h5 className="optionBlurb">These cards reflect the trials and tribulations that we experience on a daily basis. These Tarot cards highlight the more practical aspects of life and can refer to current issues that have a temporary or minor influence.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

/////  CODE  /////////////////////////////////////////////////////////////////////////////////////////////////
/////  STYLE ISSUES 
/////  - LEARN - BLURB ALIGNMENT


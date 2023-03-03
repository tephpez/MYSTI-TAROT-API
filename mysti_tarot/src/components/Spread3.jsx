import { Link } from 'react-router-dom'
import WelcomeModal from './WelcomeModal'
import React, { useState } from 'react'
import axios from "axios"
// import images from "../assets/cardfronts";



export default function Spread3() {
    let cardA, cardB, cardC;
    const [imageA, setImageA] = useState("https://i.imgur.com/Gh5ANXh.png");
    const [imageB, setImageB] = useState("https://i.imgur.com/Gh5ANXh.png");
    const [imageC, setImageC] = useState("https://i.imgur.com/Gh5ANXh.png");

    const changeImages = (setImage) => {
        setImage(changeImage());
    }

    const resetImages = (setImage) => {
        setImage("https://i.imgur.com/Gh5ANXh.png");
    }

    function importAll(r) {
        return r.keys().map(r);
    }

    function changeImage() {
        const images = importAll(require.context("../../public/assets/cardfronts", false, /\.(png|jpe?g|svg)$/));
        console.log(images);
        const randomImage = images[Math.floor(Math.random() * images.length)];
        getCards(randomImage);
        return randomImage;
    }

    function resetButton() {
        resetImages(setImageA);
        resetImages(setImageB);
        resetImages(setImageC);
    }

    function getCards(imgName) {
        let cardName = imgName.substr(14, 4); // .substr(first parameter is the starting point, second parameter is how many things to take)
        console.log(cardName);
        const url = "https://tarot-api.onrender.com/api/v1/cards/"+cardName;
        console.log(url);
        // const [majCard, setMajCard] = useState ([]);
  
        // useEffect(() => {
          
        //   const getMajCard = async () => {
        //     const response = await axios.get(url)
        //     console.log(response.data)
        //     // console.log(response.data.cards)
  
        //     // setMajCard(response.data.cards)
        //   }
  
        // //   getMajCard()
  
        // }, [])
    }

    


    return(
        <div>
            {/* <div>
                <WelcomeModal/>
            </div> */}
            <div id="titleSpacer"></div>
            <div id="titleContainer">
                <div id="titleText">
                    <span id="landingTitle"> PROBLEM ‎ ‎ ‎  • ‎ ‎ ‎ CAUSE ‎ ‎ ‎  • ‎ ‎ ‎  SOLUTION </span>
                    </div>
            </div>

            <div className="pageContainer" id="spread3PageContainer"> 

                <div className="divStackCards3">
                    <button>
                        <img id="cardImg3A" src={imageA} alt="PROBLEM" onClick={()=> changeImages(setImageA)}></img>
                    </button>
                    <button>
                        <img id="cardImg3B" src={imageB} alt="CAUSE" onClick={()=> changeImages(setImageB)}></img>
                    </button>
                    <button>
                        <img id="cardImg3C" src={imageC} alt="SOLUTION" onClick={()=> changeImages(setImageC)}></img>
                    </button>
                </div>
            
                <div className="divStackBlurbs3">
                    <div className="blurbContainer" id="cardBlurb3">    
                        <h5 className="optionBlurb">PROBLEM BLURB</h5>
                    </div>
                    <div className="blurbContainer" id="cardBlurb3">    
                        <h5 className="optionBlurb">CAUSE BLURB</h5>
                    </div>
                    <div className="blurbContainer" id="cardBlurb3">    
                        <h5 className="optionBlurb">SOLUTION BLURB</h5>
                    </div>
                </div>

            </div>
            <div id="redirectContainer">
                    <Link to="/Spread3"><button className="linkBtn" id="redirectBtn" onClick={()=> resetButton()}>RESET</button></Link> 
            </div> 
        </div>
    )
}


/////  STYLE  /////////////////////////////////////////////////////////////////////////////////////////////////



// import React, { useState } from "react";






//   function changeImage() {
//     const images = importAll(require.context("../assets", false, /\.(png|jpe?g|svg)$/));
//     console.log(images.length);
//     const randomIndex = Math.floor(Math.random() * images.length);
//     const randomImage = images[randomIndex];
//     setImage(randomImage);
//   }


//   }

//   return (
//     <div>
//       <button
//         style={{ backgroundImage: `url(${image})` }}
//         onClick={changeImage}
//       ></button>
//     </div>
//   );
// }

// export default ImageChanger;






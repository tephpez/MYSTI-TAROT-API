import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import axios from 'axios'


import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Learn from './components/Learn'
import About from './components/About'
import MajorList from './components/MajorList';
import MinorLanding from './components/MinorLanding'
import Cups from './components/Cups'
import Swords from './components/Swords'
import Pentacles from './components/Pentacles'
import Wands from './components/Wands'
import Footer from './components/Footer'




// import Spread1 from './components/Spread1'
// import Spread2 from './components/Spread2'
// import Spread3 from './components/Spread3'
// import Footer from './components/Footer'


/// MAJOR ARCANA CARD MAPPING ///

      function App() {

      const [majCard, setMajCard] = useState ([]);

      useEffect(() => {
        
        const getMajCard = async () => {
          const response = await axios.get(`https://tarot-api.onrender.com/api/v1/cards`)
          console.log(response.data.cards)

          setMajCard(response.data.cards)
        }

        getMajCard()

      }, [])


/// MINOR ARCANA CARD MAPPING ///

      const [cupsCard, setCupsCard] = useState ([]);
      useEffect(() => {
        const getCupsCard = async () => {
          const response = await axios.get(`https://tarot-api.onrender.com/api/v1/cards`)
          console.log(response.data.cards)

          setCupsCard(response.data.cards)
        }

        getCupsCard()

      }, [])


      const [swordsCard, setSwordsCard] = useState ([]);
      useEffect(() => {
        const getSwordsCard = async () => {
          const response = await axios.get(`https://tarot-api.onrender.com/api/v1/cards`)
          console.log(response.data.cards)

          setSwordsCard(response.data.cards)
        }

        getSwordsCard()

      }, [])


      const [pentaclesCard, setPentaclesCard] = useState ([]);
      useEffect(() => {
        const getPentaclesCard = async () => {
          const response = await axios.get(`https://tarot-api.onrender.com/api/v1/cards`)
          console.log(response.data.cards)

          setPentaclesCard(response.data.cards)
        }

        getPentaclesCard()

      }, [])


      const [wandsCard, setWandsCard] = useState ([]);
      useEffect(() => {
        const getWandsCard = async () => {
          const response = await axios.get(`https://tarot-api.onrender.com/api/v1/cards`)
          console.log(response.data.cards)

          setWandsCard(response.data.cards)
        }

        getWandsCard()

      }, [])


  return (
    <div className="App">
      <div>
        <Header/>
        <Nav/>
          <Routes>
            <Route path ="/" element={<Main/>}></Route>
            <Route path ="/Learn" element={<Learn/>}></Route>
            <Route path ="/About" element={<About/>}></Route>
            
            <Route path="/majorList" element = {<MajorList  majCard={majCard}/>}/>

            <Route path="/minorLanding" element = {<MinorLanding/>}/>
            <Route path ="/Cups" element={<Cups cupsCard={cupsCard}/>}></Route>
            <Route path ="/Pentacles" element={<Pentacles pentaclesCard={pentaclesCard}/>}></Route>
            <Route path ="/Swords" element={<Swords swordsCard={swordsCard}/>}></Route>
            <Route path ="/Wands" element={<Wands wandsCard={wandsCard}/>}></Route>
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

  );
}

export default App;

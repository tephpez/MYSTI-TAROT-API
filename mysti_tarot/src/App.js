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


// import Spread1 from './components/Spread1'
// import Spread2 from './components/Spread2'
// import Spread3 from './components/Spread3'
// import Footer from './components/Footer'





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

  return (
    <div className="App">
      <Header/>
      <Nav/>
        <Routes>
          <Route path ="/" element={<Main/>}></Route>
          <Route path ="/Learn" element={<Learn/>}></Route>
          <Route path ="/About" element={<About/>}></Route>
  
          <Route path="majorList" element = {<MajorList  majCard={majCard}/>}/>
          <Route path="minorLanding" element = {<MinorLanding/>}/>
        </Routes>
      </div>

  );
}

export default App;

import React, { useState } from 'react';

const WelcomeModal = () => {
  const [modalState, setModalState] = useState("block")
  const hideModal = () => { setModalState('none')}

console.log('hello')

  return (
    <div className="modal" style= {{display: [modalState]}}>
      <section className="modalContent">
        <h2>TAKE A BREATH </h2>
        <p>VISUALIZE</p>
        <p>FOCUS</p>
        <button onClick={hideModal}>READY</button>
      </section>
    </div>
  );
};

export default WelcomeModal;


// WE WANT TO GIVE OUR MODALS A STATE 
// THAT STATE WILL BE THE DISPLAY OF THE MODALS
// THE INTIAL STATE WILL BE BLOCK



// WE CAN CHANGE THE STATE TO DISPLAY THAT WAY WE CAN HIDE OR SHOW THE MODALS BASED OFF THEIR STATE
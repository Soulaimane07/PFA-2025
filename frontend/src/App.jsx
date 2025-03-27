import React from 'react'; // Ajoute cette ligne
import Auth from './Interfaces/Auth/Auth';
import Gouvernant from './Interfaces/Gouvernant/Gouvernant';

function App() {
  return (
    <div >
      <Auth />
      <Gouvernant />
      {/* <div className='h-screen'></div> */}
    </div>
  )
}

export default App

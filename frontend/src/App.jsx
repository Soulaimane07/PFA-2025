import React from 'react'; // Ajoute cette ligne
import Auth from './Interfaces/Auth/Auth';
import Gouvernant from './Interfaces/Gouvernant/Gouvernant';

function App() {

  const user = JSON.parse(localStorage.getItem('aiwater-user'))
  console.log(user)



  return (
      user === null ?
        <Auth />
      :
        <Gouvernant />
  )
}

export default App

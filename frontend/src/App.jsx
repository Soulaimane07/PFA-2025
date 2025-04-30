import React, { useEffect } from 'react'; // Ajoute cette ligne
import Auth from './Interfaces/Auth/Auth';
import Gouvernant from './Interfaces/Gouvernant/Gouvernant';
import { fetchRegions } from './App/Slices/regionsSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const user = JSON.parse(localStorage.getItem('aiwater-user'))


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);
  

  return (
      user === null ?
        <Auth />
      :
        <Gouvernant />
  )
}

export default App

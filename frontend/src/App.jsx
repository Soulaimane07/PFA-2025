import React, { useEffect } from 'react'; // Ajoute cette ligne
import Auth from './Interfaces/Auth/Auth';
import Gouvernant from './Interfaces/Gouvernant/Gouvernant';
import { fetchRegions } from './App/Slices/regionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from './App/Slices/devicesSlice';
import { fetchCities } from './App/Slices/citiesSlice';
import { fetchFactories } from './App/Slices/factoriesSlice';
import { fetchAccounts } from './App/Slices/accountsSlice';
import { fetchNotifications } from './App/Slices/notificationsSlice';
import Directeur from './Interfaces/Directeur/Directeur';
import Operateur from './Interfaces/Operateur/Operateur';

function App() {

  const user = JSON.parse(localStorage.getItem('aiwater-user'))

  // const states = useSelector(state => state)
  // console.log(states);
  


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchCities());
    dispatch(fetchFactories());
    dispatch(fetchDevices());
    dispatch(fetchAccounts());
    dispatch(fetchNotifications(user?._id));
  }, [dispatch]);
  

  return (
      user === null 
      ?
        <Auth />
      : (
          user.role === "gouvernant" && <Gouvernant />,
          user.role === "directeur" && <Directeur />,
          user.role === "operateur" && <Operateur />
      )
        
  )
}

export default App

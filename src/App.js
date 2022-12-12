import Home from './Components/Home/Home';
import HydraulicsList from './Components/HydraulicsList/HydraulicsList';
import Valve from './Components/Valve/Valve';

import theme from './theme';
import valve from './assets/valve.jpg';
import valveGrey from './assets/valveGrey.png';
import extensionValve from './assets/extensionValve.png';

import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { DeviceDataCtx } from './Context/DeviceDataCtx';

import './App.css';

const App = () => {
  const [deviceDataCtx] = useState([
    {
      image: valve,
      serial: 'SN0000f43',
      type: 'S4 Pro',
      location: 'Site1, Cheddar, UK',
      status: 'Active',
    },
    {
      image: valveGrey,
      serial: 'SN0000g96',
      type: 'S6 Pro',
      location: 'Site1, Cheddar, UK',
      status: 'Error',
    },
    {
      image: extensionValve,
      serial: 'SN0000h56',
      type: 'FAST',
      location: 'Vehicle 1, Chester, UK',
      status: 'Active',
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <DeviceDataCtx.Provider value={{ deviceDataCtx }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<HydraulicsList />} />
          <Route path='/valve' element={<Valve />} />
        </Routes>
      </DeviceDataCtx.Provider>
    </ThemeProvider>
  );
};

export default App;

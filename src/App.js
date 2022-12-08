import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Head from './Head';
import HomePage from './pages';
import Place from './Place';

function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/places' element={<Place />} /> */}
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/blocks/footer';
import NavBar from './components/blocks/navbar';
import HomePage from './pages';
// import Place from './Place';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/places' element={<Place />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

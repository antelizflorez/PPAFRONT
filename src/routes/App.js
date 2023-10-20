import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Home from '../components/pages/Home';
import Nosotros from '../components/pages/Nosotros';
import Contacto from '../components/pages/Contacto';
import Catalogo from '../components/pages/Catalogo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Nosotros' element={<Nosotros/>}></Route>
          <Route path='/Contacto' element={<Contacto/>}></Route>
          <Route path='/Contalogo' element={<Catalogo/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;

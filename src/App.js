import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header   from './components/Header';
import NavBar   from './components/NavBar';
import MainPage from './pages/MainPage';
import About    from './pages/About';
import Services from './pages/Services';
import Gallery  from './pages/Gallery';
import Contact  from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path="/"         element={<MainPage />} />
            <Route path="/about"    element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery"  element={<Gallery />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;

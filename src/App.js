import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import FootNav from './components/FootNav'
import Latest from './components/Latest'
import Home from './components/Home'
import About from './components/About'
import Join from './components/Join'
import './App.css';

function App() {

  const latest = [
    {
      "header": "header 1",
      "text": "text 1",
    },
    {
      "header": "header 2",
      "text": "text 2",
    },
    {
      "header": "header 3",
      "text": "text 3",
    },
  ]

  return (
    <Router>
      <div className="wholeContainer">
        <Header />
        <Nav />

        <main style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
          <>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </>
          <>
            <Latest latest={latest} />
          </>
        </main>

        <FootNav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

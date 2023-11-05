import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Careers from './components/Careers';
import Security from './components/Security';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/bank/" element={<Home />} />
        <Route path="/bank/about" element={<About />} />
        <Route path="/bank/careers" element={ <Careers/>} />
        <Route path="/bank/security" element={<Security />} />
        <Route path="/bank/login" element={<Login />} />
        <Route path="/bank/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
       </Routes>
    </Router>
  );
}

export default App;

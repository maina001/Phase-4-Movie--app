import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyVotes from './pages/MyVotes';
import Navbar from './components/NavBar';
import MyReviews from './pages/MyReviews';
import Reviews from './pages/Reviews';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/myvotes" element={<MyVotes/>} />
        <Route path="/myreviews" element={<MyReviews/>} />
      </Routes>
    </Router>
  );
}

export default App;

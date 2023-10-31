import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './pages/home/home_screen';
import Navbar from './pages/home/navbar';
function App() {
  return (
    <div className="App">
      {/* Have our routes here */}
      <Router>
          <div>
            <Navbar />
            {/* Here i was specifying the different routes */}
            <Routes>
                {/* This is the only routes cause we only have one page in our application */}
                <Route path="/" element={<Home/>}></Route>
                {/* We have another routes incase you type your link wrongly */}
                <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
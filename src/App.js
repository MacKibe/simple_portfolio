import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './pages/home/home_screen';
function app() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}
export default app;
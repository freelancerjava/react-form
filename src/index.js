import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Form } from './components/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

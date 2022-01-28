import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';

function App() {
  return ( 
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/password-reset" element={<Reset/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

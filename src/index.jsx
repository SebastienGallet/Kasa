import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Apropos from './pages/apropos';
import Logement from './pages/logement';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Error from './components/Error/error';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/apropos' element={<Apropos/>}/>
        <Route exact path='/lodging/:id' element={<Logement/>}/> 
        <Route exact path= '*' element={<Error/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

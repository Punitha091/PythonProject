import './App.css';
import React from 'react';
import{ BrowserRouter, Routes, Route} from "react-router-dom"
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Contact from './Components/Pages/Contact';
import PageNotFound from './Components/Pages/PageNotFound';
import Addusers from './Components/Pages/Addusers';
import Editusers from './Components/Pages/Editusers';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/addusers' element={<Addusers/>}/>
      <Route path='/editusers/:id' element={<Editusers/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

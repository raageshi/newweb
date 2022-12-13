import logo from './logo.svg';
import {Routes,Route,Navigate} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Layout from './Layout';
import React from 'react';

function App() {
  return (
    <div className="App">
       <Routes>  
        <Route path="/raki/login" element={ <Login/> } />        
        <Route path="/raki/home" element={ <Layout/> } />
        <Route path="/" exact element={<Navigate to ='/raki/login' /> } />        
        <Route path="*" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

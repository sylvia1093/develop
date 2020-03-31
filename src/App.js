import React, { useEffect } from 'react';
import {BrowserRouter } from 'react-router-dom'

import Router from './components/Router/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Interceptor from './initAxios'

function App() {
  useEffect(()=>{
    Interceptor.setupInterceptors()
  },[])
  return (
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom' 
import RegisterForm from './components/registerForm.component'
import Home from './components/home.component'

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={RegisterForm}/>
    </BrowserRouter>
  );
}

export default App;

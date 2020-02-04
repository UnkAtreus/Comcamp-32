import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom' 
import RegisterForm from './components/registerForm.component'
import Home from './components/home.component'
import Summary from './components/summary.component'

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={RegisterForm}/>
      <Route path="/summary" component={Summary}/>
    </BrowserRouter>
  );
}

export default App;

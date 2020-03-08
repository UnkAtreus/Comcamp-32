import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom' 
import RegisterForm from './components/registerForm.component'
import Home from './components/home.component'
import Summary from './components/summary.component'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

  // optional cofiguration
const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <AlertProvider template={AlertTemplate} {...options}>
      <Route path="/register" component={RegisterForm}/>
      <Route path="/summary" component={Summary}/>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;

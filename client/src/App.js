import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom' 
import { connect } from 'react-redux'
import RegisterForm from './components/registerForm.component'
import Home from './components/home.component'
import {fetchUserAction} from './actions/myaction'

function App(props) {
  useEffect( () => {
    props.fetch_user()
  }, [])


  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={RegisterForm} />
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}

export default connect(null, mapDispatchToProps)(App);

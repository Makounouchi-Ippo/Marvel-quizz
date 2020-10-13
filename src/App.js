import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './containers/Auth/Landing';
import Signup from './containers/Auth/SignUp';
import Login from './containers/Auth/Login';
import ForgetPassword from './containers/Auth/ForgetPassword';
import Welcome from './containers/Welcome';
import ErrorPage from './components/ErrorPage';
import { Route, BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/' component={Landing} />
        { localStorage.getItem('idToken') && <Route path='/welcome' component={Welcome} />}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/forgetpassword' component={ForgetPassword} />
        <Route component={ErrorPage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import {  Route,  Switch} from 'react-router-dom'
import Signup from './Pages/Signup/Signup';
import SignIn from './Pages/Signin/Signin';
import Home from './Pages/Home/Home';
import {  useEffect} from 'react';
import {  isAuthenticated} from './Server/APIServerCalls';
import {setCurrentUser} from "./Redux/userReducer/userReducerActions"
import { connect } from 'react-redux';
function App(props) {
  const {setCurrentUser} = props
  useEffect(() => {
    if (isAuthenticated()) {
      const response = isAuthenticated()
      setCurrentUser({
        user: response.user,
        token: response.token
      })
    }
    return () => {}
  }, [])
  return ( <div >
    <Switch >
      <Route path = '/' component = {Home}exact />
      <Route path = '/signin' component = { SignIn} exact />
      <Route path = '/signup' component = {Signup}exact />
    </Switch>
     </div>
  );
}

var actions = {
  setCurrentUser,
};
export default connect(null,actions)(App);
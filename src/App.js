import './App.css';
import {  Redirect, Route,  Switch} from 'react-router-dom'
import Signup from './Pages/Signup/Signup';
import SignIn from './Pages/Signin/Signin';
import Home from './Pages/Home/Home';
import {  useEffect} from 'react';
import {  getUserDetails, isAuthenticated} from './Server/APIServerCalls';
import {setCurrentUser,setUserDetails} from "./Redux/userReducer/userReducerActions"
import { connect } from 'react-redux';
import ViewProfile from './Pages/ViewProfile/ViewProfile';
function App(props) {
  useEffect(() => {
    if (isAuthenticated()) {
      const response = isAuthenticated()
      props.setCurrentUser({
        user: response.user,
        token: response.token
      })
      saveUserDetails()
    }
    return () => {}
  }, [])
  const saveUserDetails = async() => {
    const userDetails = await getUserDetails()
    props.setUserDetails(userDetails)
  }
  return ( <div >
    <Switch >
      <Route path = '/' component = {Home}exact />
      <Route path = '/signin' component = {SignIn} exact />
      <Route path = '/signup' component = {Signup} exact />
      <Redirect exact from = "/profile" to="/profile/view"/>
      <Route path = '/profile/:uid' component = {ViewProfile} exact />
    </Switch>
     </div>
  );
}
var mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}
var actions = {
  setCurrentUser,
  setUserDetails
};
export default connect(mapStateToProps,actions)(App);
import './App.css';
import {Route,Switch} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import Signup from './Pages/Signup/Signup';
import SignIn from './Pages/Signin/Signin';
function App() {
  return (
    <div>
        <Switch>
          <Route path='/' component={LandingPage} exact/>
          <Route path='/signin' component={SignIn} exact/>
          <Route path='/signup' component={Signup} exact/>
        </Switch>
    </div>
  );
}

export default App;

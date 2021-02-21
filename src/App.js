import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
function App() {
  return (
    <div>
        <Switch>
          <Route path='/' component={LandingPage} exact/>
        </Switch>
    </div>
  );
}

export default App;

import {React} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Shell from './components/Shell';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Profile from './components/Profile';
import Settings from './components/settings';
import Signup from './components/Auth/Signup';

const App = () => {

  return (  
    <Switch>
      <Route exact path="/">
        <Login /> 
      </Route>
      <Route path="/signup">
        <Signup /> 
      </Route>
      <Shell>
      <Route path="/home">
            <Home />
      </Route>

      <Route path="/profile">
              <Profile />
          </Route>


          <Route path="/settings">
              <Settings />
          </Route>
          </Shell>
    </Switch>
  );
}

export default App;

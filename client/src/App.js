import React from 'react'
import Game from './components/Game'
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute, Login, Register, NavBar, FetchUser } from '@devpoint/dps-react-kit';
import { login, register, logout, validateToken } from './actions/auth';
// import Scores from './components/Scores';

const App = () => (
  // the navbar can actually take more props than this.
  // On login and register...need render instead of component only way to pass more than 1 prop in react-router. ....render bc we need an additonal prop

  <div> 
    <NavBar handleLogout={logout} /> 
    <FetchUser validateToken={validateToken}>
      <Switch>
        <ProtectedRoute exact path="/" component={Game} />
        {/* <ProtectedRoute exact path="/scores" component={Scores} /> */}
        <Route exact path="/login" render={ props => <Login {...props} handleLogin={login} /> } />
        <Route exact path="/register" render={ props => <Register {...props} registerUser={register} /> } />
      </Switch>
    </FetchUser>
  </div>
)

export default App;

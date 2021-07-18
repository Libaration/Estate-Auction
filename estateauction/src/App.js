import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { connect } from 'react-redux';
import { fetchLogin } from './actions/usersAction';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/login"
          component={() => <Login fetchLogin={props.fetchLogin} />}
        />
      </Switch>
    </div>
  );
}

export default connect(null, { fetchLogin })(App);

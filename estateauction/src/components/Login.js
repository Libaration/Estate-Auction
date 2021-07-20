import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../logo.png';
import { motion } from 'framer-motion';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: 'username',
      password: 'password',
    };
  }

  componentDidUpdate() {
    if (localStorage.hasOwnProperty('token')) {
      this.props.history.push('/homes');
    }
  }

  render() {
    return (
      <>
        <div className="bgHeader"></div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 20 }}
          className="loginContainer"
        >
          <div className="sideText">
            <img src={logo} alt="logo" />
            <br></br>
            <br></br>
            Buy or Sell Residential and Commercial Real Estate. Leaders in
            Online Real Estate Auction Services. Search Properties on estate
            auction
          </div>

          <div className="field">
            <form
              id="form_login"
              onSubmit={(event) => this.handleSubmit(event)}
            >
              <input
                type="text"
                name="username"
                autoComplete="off"
                value={this.state.username}
                onChange={(event) => this.handleChange(event)}
              />
              <br />

              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={(event) => this.handleChange(event)}
              />
              <br />
              <button type="submit" className="loginButton">
                Login
              </button>
            </form>
          </div>
        </motion.div>
      </>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchLogin(this.state);
  };
}

export default withRouter(Login);

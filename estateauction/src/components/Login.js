import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: 'username',
      password: 'password',
    };
  }
  componentDidMount() {
    if (typeof localStorage.token !== 'undefined') {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <>
        <div className="sideText">
          Buy or Sell Residential and Commercial Real Estate. Leaders in Online
          Real Estate Auction Services. Search Properties on estate auction
        </div>
        <div className="bgHeader"></div>
        <div className="field">
          <form id="form_login" onSubmit={(event) => this.handleSubmit(event)}>
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
            <button type="submit" class="loginButton">
              Login
            </button>
          </form>
        </div>
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
    this.props.history.push('/');
  };
}

export default withRouter(Login);

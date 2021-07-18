import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(event) => this.handleChange(event)}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" value="Login" />
        </form>
      </>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => this.handleSubmit(event)}>
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchLogin(this.state);
  };
}

export default withRouter(Login);

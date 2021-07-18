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
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="submit" value="Login" />
        </form>
      </>
    );
  }
}

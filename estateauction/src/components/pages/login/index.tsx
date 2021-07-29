import React, { Component, FormEvent, ChangeEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../../../logo.png';
import { motion } from 'framer-motion';
import { isLoggedIn } from '../../../helpers/helpers';

interface Props extends RouteComponentProps {
  login: (currentState: State) => void;
}
interface State {
  username: string;
  password: string;
}

class index extends Component<Props, State> {
  state = {
    username: '',
    password: '',
  };
  componentDidMount() {
    if (isLoggedIn()) {
      this.props.history.push('/homes');
    }
  }

  handleSubmit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      await this.props.login(this.state);
      if (isLoggedIn()) {
        this.props.history.push('/homes');
      }
    } catch {
      alert('incorrect information');
    }
  };
  handleChange = (event: FormEvent<HTMLElement>) => {
    this.setState({
      [(event.currentTarget as HTMLInputElement).name]: (
        event.currentTarget as HTMLInputElement
      ).value,
    } as { [K in keyof State]: State[K] });
  };

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
}

export default withRouter(index);

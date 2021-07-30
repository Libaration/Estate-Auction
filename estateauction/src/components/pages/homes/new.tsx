import React, { Component, FormEvent } from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
import bedroom from '../../../icons/bedroom.png';
import bathroom from '../../../icons/bathroom.png';
import zone from '../../../icons/zone.png';
import address from '../../../icons/address.png';
import image from '../../../icons/image.png';
import skyscraper from '../../../icons/skyscraper.png';
import { connect } from 'react-redux';
import { createHome } from '../../../actions/HomeActions';

interface Props {
  createHome: (currentState: State) => void;
}
interface State {
  address: string;
  url: string;
  bedrooms: any; //these technically have to be number type but then handleChange breaks because of the keyof implementation
  bathrooms: any; // because number text fields are strings, todo: make an edge case just to parseInt 2 stupid fields. note2self
  endDate: string;
  zoning: string;
}

class New extends Component<Props, State> {
  state = {
    address: '',
    url: '',
    bedrooms: '',
    bathrooms: '',
    endDate: '',
    zoning: '',
  };

  handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.createHome(this.state);
  };
  handleChange = (e: FormEvent<HTMLElement>) => {
    this.setState({
      [(e.currentTarget as HTMLInputElement).name]: (
        e.currentTarget as HTMLInputElement
      ).value,
    } as { [K in keyof State]: State[K] });
  };

  render() {
    const today = moment().format(moment.HTML5_FMT.DATETIME_LOCAL);
    return (
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
      >
        <div className="homeShowField">
          <div className="homeShowCard">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <i className="inputIcon">
                <img src={address} alt="Address" />
              </i>
              <div className="labelText">Address:</div> <br />
              <input
                type="text"
                name="address"
                onChange={(e) => this.handleChange(e)}
                value={this.state.address}
              />
              <br />
              <i className="inputIcon">
                <img src={image} alt=".." />
              </i>
              <div className="labelText">Image URL:</div> <br />
              <input
                type="text"
                name="url"
                autoComplete="new-off"
                onChange={(e) => this.handleChange(e)}
                value={this.state.url}
              />
              <br />
              <i className="inputIcon">
                <img src={bedroom} alt="bedroom" />
              </i>
              <div className="labelText">Bedrooms:</div> <br />
              <input
                type="number"
                name="bedrooms"
                onChange={(e) => this.handleChange(e)}
                value={this.state.bedrooms}
              />
              <br />
              <i className="inputIcon">
                <img src={bathroom} alt="bathroom" />
              </i>
              <div className="labelText">Bathrooms:</div> <br />
              <input
                type="number"
                name="bathrooms"
                onChange={(e) => this.handleChange(e)}
                value={this.state.bathrooms}
              />
              <br />
              <i className="inputIcon">
                <img src={zone} alt="zoning" />
              </i>
              <div className="labelText">Zoning:</div> <br />
              <input
                type="text"
                name="zoning"
                onChange={(e) => this.handleChange(e)}
                value={this.state.zoning}
              />
              <br />
              <div className="labelText">Auction End:</div> <br />
              <input
                type="datetime-local"
                min={today}
                name="endDate"
                onChange={(e) => this.handleChange(e)}
                value={this.state.endDate}
              />
              <br />
              <input type="submit" className="addButton" value="List Home" />
            </form>
          </div>
          <div className="skyscraper">
            <img src={skyscraper} alt="skyscraper" />
          </div>
        </div>
      </motion.div>
    );
  }
}

export default connect(null, { createHome })(New);

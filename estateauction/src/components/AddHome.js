import React, { Component } from 'react';
import moment from 'moment';
import bedroom from '../icons/bedroom.png';
import bathroom from '../icons/bathroom.png';
import zone from '../icons/zone.png';
import address from '../icons/address.png';
import image from '../icons/image.png';
import { motion } from 'framer-motion';
import SideNav from './SideNav';
import skyscraper from '../icons/skyscraper.png';

export default class AddHome extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      url: '',
      bedrooms: '',
      bathrooms: '',
      endDate: '',
      zoning: '',
    };
  }
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
            <form>
              <i className="inputIcon">
                <img src={address} alt="Address" />
              </i>
              <div className="labelText">Address:</div> <br />
              <input type="text" />
              <br />
              <i className="inputIcon">
                <img src={image} alt=".." />
              </i>
              <div className="labelText">Image URL:</div> <br />
              <input type="text" />
              <br />
              <i className="inputIcon">
                <img src={bedroom} alt="bedroom" />
              </i>
              <div className="labelText">Bedrooms:</div> <br />
              <input type="text" />
              <br />
              <i className="inputIcon">
                <img src={bathroom} alt="bathroom" />
              </i>
              <div className="labelText">Bathrooms:</div> <br />
              <input type="text" />
              <br />
              <i className="inputIcon">
                <img src={zone} alt="zoning" />
              </i>
              <div className="labelText">Zoning:</div> <br />
              <input type="text" />
              <br />
              <div className="labelText">Auction End:</div> <br />
              <input type="datetime-local" min={today} />
              <br />
              <button className="addButton">List Home</button>
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

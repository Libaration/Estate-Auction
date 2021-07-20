import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHome } from '../actions/homesAction';
import { motion } from 'framer-motion';
import numberWithCommas from '../helpers/numbersHelper';
import bathroom from '../icons/bathroom.png';
import bedroom from '../icons/bedroom.png';
import zone from '../icons/zone.png';

class HomeShow extends Component {
  componentDidMount() {
    const { homeId } = this.props.match.params;
    this.props.fetchHome(homeId);
  }
  renderHome = () => {
    const home = this.props.homes.homes[0];

    return (
      <div className="homeShowCard">
        <div className="homeDetails">
          <div className="detailsIcons">
            <img src={bathroom} alt="bathroom icon" />
            <span>{home.bathrooms} Bathroom/s</span>

            <img src={bedroom} alt="bedroom icon" />
            <span>{home.bedrooms} Bedroom/s</span>

            <img src={zone} alt="zone icon" />
            <span>Zoning: {home.zoning}</span>
          </div>
          <div className="detailsText">
            <span>{home.details}</span>
            <p></p>
            <div className="detailsMoreText">
              <b>Occupancy:</b> Property is Vacant.
              <br />
              <b>Year Built:</b> 1910 <br />
              <b>Lot Size:</b> 14X77
              <br /> <b>Real Estate Taxes (2020-2021):</b> $354.00
              <br /> Title: Sold free and clear of all liens. Subject to annual
              ground rent of $78.00
              <br />
              <b>Inspection Time:</b> Call Office for Details.
              <br />
              <b>Deposit:</b> The initial deposit amount is listed above. All
              deposits must be cash or certified funds.
              <br />
              <b>Auction ID:</b> A-000001616
            </div>
          </div>
        </div>
        <div className="bid">
          <b>Current Bid: ${numberWithCommas(home.bid)}</b>
        </div>
        <b>Address:</b> {home.address}
        <div className="homeShowPicture">
          <img src={`${home.url}`} alt="home" />
        </div>
        <div class="embedMap">
          <iframe
            title="map"
            style={{ border: 'none', width: '1266px' }}
            src={`https://www.google.com/maps/embed/v1/search?q=${escape(
              home.address
            )}&key=AIzaSyDgBIlTP2pNgRihWtEiy-cj1nj0VukN8IM`}
          ></iframe>
        </div>
      </div>
    );
  };

  render() {
    return (
      <motion.div
        transition={{ duration: 0.1 }}
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
      >
        <div className="homeShowField">
          {this.props.homes.homes.length > 0
            ? this.renderHome()
            : 'loading....'}
        </div>
      </motion.div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    homes: state.homes,
  };
};
export default connect(mapStateToProps, { fetchHome })(HomeShow);

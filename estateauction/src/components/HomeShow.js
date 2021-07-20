import { React, useEffect } from 'react';
import { fetchHome } from '../actions/homesAction';
import { connect } from 'react-redux';

function HomeShow(props) {
  useEffect(() => {
    const { homeId } = props.match.params;
    props.fetchHome(homeId);
  }, []);
  const renderHome = () => {
    const home = props.homes.homes[0];
    return <>{home.address}</>;
  };

  return <div>{props.homes.loading ? 'loading......' : renderHome()}</div>;
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    homes: state.homes,
  };
};
export default connect(mapStateToProps, { fetchHome })(HomeShow);

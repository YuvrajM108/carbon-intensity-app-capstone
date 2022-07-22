import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faCog,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Details = ({
  areaName,
  subAreas,
}) => (
  <main className="home-main">
    <nav className="det-top-bar">
      <NavLink to="/" className="nav-link">
        <div className="top-bar-left">
          <FontAwesomeIcon icon={faAngleLeft} className="nav-icon-left" />
        </div>
      </NavLink>
      <h2>CARBON INTENSITY TRACKER</h2>
      <div className="top-bar-right">
        <FontAwesomeIcon icon={faMicrophone} className="nav-icon-right" />
        <FontAwesomeIcon icon={faCog} className="nav-icon-right" />
      </div>
    </nav>
    <h1>{areaName.toUpperCase()}</h1>
    { subAreas.map((subArea) => (
      (subAreas.indexOf(subArea) % 2) === 0
        ? (
          <div key={subAreas.indexOf(subArea)} className="subarea-record">
            <h3>{subArea.name}</h3>
            <h3>{subArea.forecast}</h3>
          </div>
        )
        : (
          <div key={subAreas.indexOf(subArea)} className="subarea-record even-item">
            <h3>{subArea.name}</h3>
            <h3>{subArea.forecast}</h3>
          </div>
        )
    )) }
  </main>
);

Details.propTypes = {
  areaName: PropTypes.string.isRequired,
  subAreas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    forecast: PropTypes.number.isRequired,
  })).isRequired,
};

export default Details;

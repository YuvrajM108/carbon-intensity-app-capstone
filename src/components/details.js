import React from 'react';
import PropTypes from 'prop-types';

const Details = ({
  areaName,
  subAreas,
}) => (
  <main>
    <h1>{areaName.toUpperCase()}</h1>
    { subAreas.map((subArea) => (
      <div key={subAreas.indexOf(subArea)}>
        <h3>{subArea.name}</h3>
        <h3>{subArea.forecast}</h3>
      </div>
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

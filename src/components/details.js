import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ areaName }) => (
  <main>
    <h1>{areaName}</h1>
  </main>
);

Details.propTypes = {
  areaName: PropTypes.string.isRequired,
};

export default Details;

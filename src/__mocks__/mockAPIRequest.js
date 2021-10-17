const axios = require('axios');

export const getGBDetails = () => {
  axios.get('https://api.carbonintensity.org.uk/regional/regionid/18')
    .then((res) => res.data)
    .catch((error) => error);
};

export const getEnglandDetails = () => {
  axios.get('https://api.carbonintensity.org.uk/regional/regionid/15')
    .then((res) => res.data)
    .catch((error) => error);
};

export const getScotlandDetails = () => {
  axios.get('https://api.carbonintensity.org.uk/regional/regionid/16')
    .then((res) => res.data)
    .catch((error) => error);
};

export const getWalesDetails = () => {
  axios.get('https://api.carbonintensity.org.uk/regional/regionid/17')
    .then((res) => res.data)
    .catch((error) => error);
};

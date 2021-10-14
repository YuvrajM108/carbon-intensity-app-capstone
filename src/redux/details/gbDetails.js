import axios from 'axios';

const GET_GB_DETAILS = 'GET_GB_DETAILS';

const initialState = {
  name: null,
  forecast: null,
};

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const areaID = 18;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GB_DETAILS:
      return { ...action.payload };
    default:
      return state;
  }
};

export const getGBDetails = () => async (dispatch) => {
  const res = await axios.get(`${requestURL}${areaID}`);
  const responseData = res.data;
  if (responseData) {
    const areaDetails = {
      name: responseData.data[0].shortname,
      forecast: responseData.data[0].data[0].intensity.forecast,
    };
    dispatch({
      type: GET_GB_DETAILS,
      payload: areaDetails,
    });
  }
};

export default reducer;

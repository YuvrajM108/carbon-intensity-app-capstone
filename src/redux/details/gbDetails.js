import axios from 'axios';

const GET_GB_DETAILS = 'detailStore/gbDetails/GET_GB_DETAILS';

const initialState = [];

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const areaID = 18;

export const getGBDetails = () => async (dispatch) => {
  const res = await axios.get(`${requestURL}${areaID}`);
  const responseData = res.data;
  if (responseData) {
    const areaDetails = {
      name: responseData.shortname,
      forecast: responseData.intensity.forecast,
    };
    dispatch({
      type: GET_GB_DETAILS,
      payload: areaDetails,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GB_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

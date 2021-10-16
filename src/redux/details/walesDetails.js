import axios from 'axios';

const GET_WALES_DETAILS = 'detailStore/walesDetails/GET_WALES_DETAILS';

const initialState = [];

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const areaID = 17;

export const getWalesDetails = () => async (dispatch) => {
  const res = await axios.get(`${requestURL}${areaID}`);
  const responseData = res.data;
  const detailsByArea = [];
  if (responseData) {
    const areaDetails = {
      name: responseData.data[0].shortname,
      forecast: responseData.data[0].data[0].intensity.forecast,
    };
    detailsByArea.push(areaDetails);
    dispatch({
      type: GET_WALES_DETAILS,
      payload: detailsByArea,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALES_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

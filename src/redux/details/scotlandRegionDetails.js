import axios from 'axios';

const GET_SCOTLAND_REGION_DETAILS = 'detailStore/scotlandDetails/GET_SCOTLAND_REGION_DETAILS';

const initialState = [];

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const regionIDs = [1, 2];

export const getScotlandRegionDetails = () => async (dispatch) => {
  const detailsByRegion = [];
  await Promise.all(regionIDs.map((id) => axios.get(`${requestURL}${id}`).then((response) => {
    const responseData = response.data;
    if (responseData) {
      const regionDetails = {
        name: responseData.data[0].shortname,
        forecast: responseData.data[0].data[0].intensity.forecast,
      };
      detailsByRegion.push(regionDetails);
    }
  })));
  dispatch({
    type: GET_SCOTLAND_REGION_DETAILS,
    payload: detailsByRegion,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCOTLAND_REGION_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

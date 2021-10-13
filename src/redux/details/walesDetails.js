import axios from 'axios';

const GET_WALES_DETAILS = 'detailStore/walesDetails/GET_WALES_DETAILS';
const GET_WALES_REGION_DETAILS = 'detailStore/walesDetails/GET_WALES_DETAILS';

const initialState = [];

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const areaID = 17;
const regionIDs = [6, 7];

export const getWalesDetails = () => async (dispatch) => {
  const res = await axios.get(`${requestURL}${areaID}`);
  const responseData = res.data;
  if (responseData) {
    const areaDetails = {
      name: responseData.shortname,
      forecast: responseData.intensity.forecast,
    };
    dispatch({
      type: GET_WALES_DETAILS,
      payload: areaDetails,
    });
  }
};

export const getWalesRegionDetails = () => async (dispatch) => {
  const detailsByRegion = [];
  await Promise.all(regionIDs.map((id) => axios.get(`${requestURL}${id}`).then((response) => {
    const responseData = response.data;
    if (responseData) {
      const regionDetails = {
        name: responseData.name,
        forecast: responseData.intensity.forecast,
      };
      detailsByRegion.push(regionDetails);
    }
  })));
  dispatch({
    type: GET_WALES_REGION_DETAILS,
    payload: detailsByRegion,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALES_DETAILS:
      return [...action.payload];
    case GET_WALES_REGION_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

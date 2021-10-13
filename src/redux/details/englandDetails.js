import axios from 'axios';

const GET_ENGLAND_DETAILS = 'detailsStore/englandDetails/GET_ENGLAND_DETAILS';
const GET_ENGLAND_REGION_DETAILS = 'detailStore/englandDetails/GET_ENGLAND_REGION_DETAILS';

const initialState = [];

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const areaID = 15;
const regionIDs = [3, 4, 5, 8, 9, 10, 11, 12, 13, 14];

export const getEnglandDetails = () => async (dispatch) => {
  const res = await axios.get(`${requestURL}${areaID}`);
  const responseData = res.data;
  if (responseData) {
    const areaDetails = {
      name: responseData.shortname,
      forecast: responseData.intensity.forecast,
    };
    dispatch({
      type: GET_ENGLAND_DETAILS,
      payload: areaDetails,
    });
  }
};

export const getEnglandRegionDetails = () => async (dispatch) => {
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
    type: GET_ENGLAND_REGION_DETAILS,
    payload: detailsByRegion,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENGLAND_DETAILS:
      return [...action.payload];
    case GET_ENGLAND_REGION_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

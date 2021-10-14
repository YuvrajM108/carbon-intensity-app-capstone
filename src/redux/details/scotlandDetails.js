import axios from 'axios';

const GET_SCOTLAND_DETAILS = 'detailStore/scotlandDetails/GET_SCOTLAND_DETAILS';
const GET_SCOTLAND_REGION_DETAILS = 'detailStore/scotlandDetails/GET_SCOTLAND_REGION_DETAILS';

const initialState = [];

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const areaID = 16;
const regionIDs = [1, 2];

export const getScotlandDetails = () => async (dispatch) => {
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
      type: GET_SCOTLAND_DETAILS,
      payload: detailsByArea,
    });
  }
};

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
    case GET_SCOTLAND_DETAILS:
      return [...action.payload];
    case GET_SCOTLAND_REGION_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

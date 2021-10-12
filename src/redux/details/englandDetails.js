import axios from 'axios';

const GET_AREA_DETAILS = 'detailsStore/details/GET_AREA_DETAILS';
const GET_REGION_DETAILS = 'detailStore/details/GET_REGION_DETAILS';

const initialState = [];

const requestURL = 'https://api.carbonintensity.org.uk/regional/regionid/';

const areaID = 15;
const regionIDs = [3, 4, 10, 11, 12, 14];

export const getAreaDetails = () => async (dispatch) => {
  const res = await axios.get(`${requestURL}${areaID}`);
  const responseData = res.data;
  if (responseData) {
    const areaDetails = { name: responseData.shortname,
                          forecast: responseData.intensity.forecast,
                        };
    dispatch({
      type: GET_AREA_DETAILS,
      payload: areaDetails,
    });
  }
};

export const getRegionDetails = () => async (dispatch) => {
  const detailsByRegion = [];
  regionIDs.forEach((id) => {
    const res = await axios.get(`${requestURL}${id}`);
    const responseData = res.data;
    if (responseData) {
      const regionDetails = { name: responseData.name,
                              forecast: responseData.intensity.forecast,
                            };
      detailsByRegion.push(regionDetails);
    }
  });
  dispatch({
    type: GET_REGION_DETAILS,
    payload: detailsByRegion,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AREA_DETAILS:
      return [...action.payload];
    case GET_REGION_DETAILS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

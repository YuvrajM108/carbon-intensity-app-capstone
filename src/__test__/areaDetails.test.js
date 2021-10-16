import * as axios from 'axios';
import * as app from '../__mocks__/mockAPIRequest';

jest.mock('axios');

describe('Mocks and tests API calls to get data by region', () => {
  test('Action to get GB details', () => {
    const mockRes = { data: [{ data: [{ name: 'GB', forecast: 120 }] }] };
    axios.get.mockResolvedValue(mockRes);
    app.getGBDetails();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.carbonintensity.org.uk/regional/regionid/18');
  });

  test('Action to get England details', () => {
    const mockRes = { data: [{ data: [{ name: 'England', forecast: 120 }] }] };
    axios.get.mockResolvedValue(mockRes);
    app.getEnglandDetails();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.carbonintensity.org.uk/regional/regionid/15');
  });

  test('Action to get Scotland details', () => {
    const mockRes = { data: [{ data: [{ name: 'Scotland', forecast: 120 }] }] };
    axios.get.mockResolvedValue(mockRes);
    app.getScotlandDetails();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.carbonintensity.org.uk/regional/regionid/16');
  });

  test('Action to get Wales details', () => {
    const mockRes = { data: [{ data: [{ name: 'Wales', forecast: 120 }] }] };
    axios.get.mockResolvedValue(mockRes);
    app.getWalesDetails();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://api.carbonintensity.org.uk/regional/regionid/17');
  });
});

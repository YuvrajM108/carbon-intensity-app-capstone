import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Details from './components/details';
import { getGBDetails } from './redux/details/gbDetails';
import { getEnglandDetails } from './redux/details/englandDetails';
import { getEnglandRegionDetails } from './redux/details/englandRegionDetails';
import { getScotlandDetails } from './redux/details/scotlandDetails';
import { getScotlandRegionDetails } from './redux/details/scotlandRegionDetails';
import { getWalesDetails } from './redux/details/walesDetails';
import { getWalesRegionDetails } from './redux/details/walesRegionDetails';
import gbMap from './images/great-britain-map-silhouette.png';
import engMap from './images/england-map-silhouette.png';
import scotMap from './images/scotland-map-silhouette.png';
import walMap from './images/wales-map-silhouette.png';

function App() {
  const dispatch = useDispatch();
  const gbDetails = useSelector((state) => state.gbDetailsReducer);
  const engDetails = useSelector((state) => state.englandDetailsReducer);
  const engRegionDetails = useSelector((state) => state.englandRegionDetailsReducer);
  const scotDetails = useSelector((state) => state.scotlandDetailsReducer);
  const scotRegionDetails = useSelector((state) => state.scotlandRegionDetailsReducer);
  const walDetails = useSelector((state) => state.walesDetailsReducer);
  const walRegionDetails = useSelector((state) => state.walesRegionDetailsReducer);
  const loadGBDetailsAction = bindActionCreators(getGBDetails, dispatch);
  const loadEngDetailsAction = bindActionCreators(getEnglandDetails, dispatch);
  const loadEngRegionDetailsAction = bindActionCreators(getEnglandRegionDetails, dispatch);
  const loadScotDetailsAction = bindActionCreators(getScotlandDetails, dispatch);
  const loadScotRegionDetailsAction = bindActionCreators(getScotlandRegionDetails, dispatch);
  const loadWalDetailsAction = bindActionCreators(getWalesDetails, dispatch);
  const loadWalRegionDetailsAction = bindActionCreators(getWalesRegionDetails, dispatch);

  useEffect(() => {
    loadGBDetailsAction();
    loadEngDetailsAction();
    loadEngRegionDetailsAction();
    loadScotDetailsAction();
    loadScotRegionDetailsAction();
    loadWalDetailsAction();
    loadWalRegionDetailsAction();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <main className="home-main">
              <NavLink to="/" className="nav-link">
                <div className="main-link-container">
                  <img src={gbMap} className="gb-map" alt="GB map" />
                  <div className="area-details">
                    <h1 className="area-name">GREAT BRITAIN</h1>
                    <h2 className="area-forecast">{gbDetails.forecast}</h2>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/details/england" className="nav-link">
                <div className="main-link-container">
                  <img src={engMap} className="area-map" alt="England map" />
                  <div className="area-details">
                    <h1 className="area-name">ENGLAND</h1>
                    { engDetails.map((detail) => (
                      <h2 key={engDetails.indexOf(detail)} className="area-forecast">{detail.forecast}</h2>
                    )) }
                  </div>
                </div>
              </NavLink>
              <NavLink to="/details/scotland" className="nav-link">
                <div className="main-link-container">
                  <img src={scotMap} className="area-map" alt="Scotland map" />
                  <div className="area-details">
                    <h1 className="area-name">SCOTLAND</h1>
                    { scotDetails.map((detail) => (
                      <h2 key={scotDetails.indexOf(detail)} className="area-forecast">{detail.forecast}</h2>
                    )) }
                  </div>
                </div>
              </NavLink>
              <NavLink to="/details/wales" className="nav-link">
                <div className="main-link-container">
                  <img src={walMap} className="area-map" alt="Wales map" />
                  <div className="area-details">
                    <h1 className="area-name">WALES</h1>
                    { walDetails.map((detail) => (
                      <h2 key={walDetails.indexOf(detail)} className="area-forecast">{detail.forecast}</h2>
                    )) }
                  </div>
                </div>
              </NavLink>
            </main>
          </Route>
          <Route path="/details/england">
            { engDetails.map((detail) => (
              <Details
                key={engDetails.indexOf(detail)}
                areaName={detail.name}
                subAreas={engRegionDetails}
              />
            )) }
          </Route>
          <Route path="/details/scotland">
            { scotDetails.map((detail) => (
              <Details
                key={scotDetails.indexOf(detail)}
                areaName={detail.name}
                subAreas={scotRegionDetails}
              />
            )) }
          </Route>
          <Route path="/details/wales">
            { walDetails.map((detail) => (
              <Details
                key={walDetails.indexOf(detail)}
                areaName={detail.name}
                subAreas={walRegionDetails}
              />
            )) }
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

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
import { getScotlandDetails } from './redux/details/scotlandDetails';
import { getWalesDetails } from './redux/details/walesDetails';

function App() {
  const dispatch = useDispatch();
  const gbDetails = useSelector((state) => state.gbDetailsReducer);
  const engDetails = useSelector((state) => state.englandDetailsReducer);
  const scotDetails = useSelector((state) => state.scotlandDetailsReducer);
  const walDetails = useSelector((state) => state.walesDetailsReducer);
  const loadGBDetailsAction = bindActionCreators(getGBDetails, dispatch);
  const loadEngDetailsAction = bindActionCreators(getEnglandDetails, dispatch);
  const loadScotDetailsAction = bindActionCreators(getScotlandDetails, dispatch);
  const loadWalDetailsAction = bindActionCreators(getWalesDetails, dispatch);

  useEffect(() => {
    loadGBDetailsAction();
    loadEngDetailsAction();
    loadScotDetailsAction();
    loadWalDetailsAction();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <main className="home-main">
              <NavLink to="/" className="nav-link">
                <div className="main-link-container">
                  <h1 className="area-name">GREAT BRITAIN</h1>
                  <h2>{gbDetails.forecast}</h2>
                </div>
              </NavLink>
              <NavLink to="/details/england" className="nav-link">
                <div className="main-link-container">
                  <h1 className="area-name">ENGLAND</h1>
                  { engDetails.map((detail) => (
                    <h2 key={0}>{detail.forecast}</h2>
                  )) }
                </div>
              </NavLink>
              <NavLink to="/details/scotland" className="nav-link">
                <div className="main-link-container">
                  <h1 className="area-name">SCOTLAND</h1>
                  { scotDetails.map((detail) => (
                    <h2 key={0}>{detail.forecast}</h2>
                  )) }
                </div>
              </NavLink>
              <NavLink to="/details/wales" className="nav-link">
                <div className="main-link-container">
                  <h1 className="area-name">WALES</h1>
                  { walDetails.map((detail) => (
                    <h2 key={0}>{detail.forecast}</h2>
                  )) }
                </div>
              </NavLink>
            </main>
          </Route>
          <Route path="/details/england">
            <Details areaName="ENGLAND" />
          </Route>
          <Route path="/details/scotland">
            <Details areaName="SCOTLAND" />
          </Route>
          <Route path="/details/wales">
            <Details areaName="WALES" />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

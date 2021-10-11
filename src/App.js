import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <main className="home-main">
              <Link to="/details/england">
                <div className="main-link-container">
                  <h1>ENGLAND</h1>
                </div>
              </Link>
              <Link to="/details/scotland">
                <div className="main-link-container">
                  <h1>SCOTLAND</h1>
                </div>
              </Link>
              <Link to="/details/wales">
                <div className="main-link-container">
                  <h1>WALES</h1>
                </div>
              </Link>
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

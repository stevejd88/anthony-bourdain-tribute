import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

// APP COMPONENTS
import YearContainer from './years/YearContainer';
import { Year1956, Year1999, Year2000,
        Year2002, Year2005, Year2011,
        Year2013, Year2018 } from '../data/years';

const Timeline = ({match}) => (
  <BrowserRouter>
    <h1 className="timeline-heading">Timeline</h1>
    <div className="timeline-div">
      <div className="timeline-nav">
        <ul>
          <li><NavLink to={`${match.url}/1956`}>1956</NavLink></li>
          <li><NavLink to={`${match.url}/1999`}>1999</NavLink></li>
          <li><NavLink to={`${match.url}/2000`}>2000</NavLink></li>

          <li><NavLink to={`${match.url}/2002`}>2002</NavLink></li>
          <li><NavLink to={`${match.url}/2005`}>2005</NavLink></li>
          <li><NavLink to={`${match.url}/2011`}>2011</NavLink></li>
          <li><NavLink to={`${match.url}/2013`}>2013</NavLink></li>
          <li><NavLink to={`${match.url}/2018`}>2018</NavLink></li>
        </ul>
      </div>

      {/*ROUTES BELOW */}
      <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/1956`} /> } />
      <Route path={`${match.path}/1956`} render={ () => <YearContainer data={Year1956}/> } />
      <Route path={`${match.path}/1999`} render={ () => <YearContainer data={Year1999}/> } />
      <Route path={`${match.path}/2000`} render={ () => <YearContainer data={Year2000}/> } />

      <Route path={`${match.path}/2002`} render={ () => <YearContainer data={Year2002}/> } />
      <Route path={`${match.path}/2005`} render={ () => <YearContainer data={Year2005}/> } />
      <Route path={`${match.path}/2011`} render={ () => <YearContainer data={Year2011}/> } />
      <Route path={`${match.path}/2013`} render={ () => <YearContainer data={Year2013}/> } />
      <Route path={`${match.path}/2018`} render={ () => <YearContainer data={Year2018}/> } />

    </div>
  </BrowserRouter>
)

export default Timeline;

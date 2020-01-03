import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// APP COMPONENTS
import Home from './Home';
import Header from './Header';
import Legacy from './Legacy';
import Timeline from './Timeline';

const  App = () => (
  <BrowserRouter>
    <div className="main-display">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/legacy" component={Legacy} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </div>
  </BrowserRouter>


)

export default App;

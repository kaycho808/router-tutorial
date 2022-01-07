import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  const location = useLocation();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
        <li>
          <Link to="/navigate">navigate example</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/navigate" element={<HistorySample />} />
        <Route
          path="/*"
          element={
            <div>
              <h2>page does not exist:</h2>
              <p>{location.pathname}</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

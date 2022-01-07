import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'black' : 'white',
            })}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/kay"
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'black' : 'white',
            })}
          >
            kay
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/*" element={<div>사용자를 선택해 주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;

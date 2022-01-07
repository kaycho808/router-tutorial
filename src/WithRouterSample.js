import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const WithRouterSample = () => {
  const param = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h4>location - useLocation - prev: history</h4>
      <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly />
      <h4>param - useParams - prev: match</h4>
      <textarea value={JSON.stringify(param, null, 2)} rows={7} readOnly />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        go home
      </button>
    </div>
  );
};

export default WithRouterSample;

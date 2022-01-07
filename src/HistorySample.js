import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrompt } from './Blocker';

const HistorySample = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  usePrompt('현재 페이지를 벗어나시겠습니까?', true);

  return (
    <div>
      <button onClick={goBack}>go back</button>
      <button onClick={goHome}>go home</button>
    </div>
  );
};

export default HistorySample;

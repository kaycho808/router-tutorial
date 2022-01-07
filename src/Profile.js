import React from 'react';
import { useParams } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  velopert: {
    name: '김민준',
    description: '리액트 책 지은이',
  },
  kay: {
    name: '조유경',
    description: '졸리다...',
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;

import React from 'react';
import { InfoSection } from '../../components';
import { homeOjbOne, homeOjbTwo, homeOjbThree } from './Data';

export const Home = () => {
  return (
    <div>
      <InfoSection {...homeOjbOne}></InfoSection>
      <InfoSection {...homeOjbTwo}></InfoSection>
      <InfoSection {...homeOjbThree}></InfoSection>
    </div>
  );
};

export default Home;

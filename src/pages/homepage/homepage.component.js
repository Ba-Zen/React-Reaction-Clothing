import React from 'react';

import Directory from '../../components/directory/directory.component';
import videoBackground from '../../assets/models.mp4';

import { HomePageContainer, videoContainer } from './homepage.styles';

import './homepage.scss';

const HomePage = () => (
  <HomePageContainer>
    <videoContainer>
      <video
        src={videoBackground}
        autoPlay={true}
        muted
        loop={true}
        className='video'
      />
    </videoContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;

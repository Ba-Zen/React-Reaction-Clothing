import React from 'react';

import Directory from '../../components/directory/directory.component';
import videoBackground from '../../assets/models.mp4';

import { HomePageContainer, VideoContainer } from './homepage.styles';

import './homepage.scss';

const HomePage = () => (
  <HomePageContainer>
    <VideoContainer>
      <video
        src={videoBackground}
        autoPlay={true}
        muted
        loop={true}
        className='video'
      />
    </VideoContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;

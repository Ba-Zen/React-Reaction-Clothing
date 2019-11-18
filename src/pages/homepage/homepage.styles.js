import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoContainer = styled.div`
  width: auto;
  overflow: hidden;
  z-index: 1;
  top: 2.5%;
`;

export const HeroVideo = styled.video`
  filter: brightness(50%);
  width: 100%;
  object-fit: cover;
`;

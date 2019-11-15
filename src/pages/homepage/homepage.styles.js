import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const videoContainer = styled.div`
  height: 20vh;
  width: auto;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 2.5%;
`;

export const heroVideo = styled.video`
  filter: brightness(50%);
  width: 100%;
  object-fit: cover;
`;

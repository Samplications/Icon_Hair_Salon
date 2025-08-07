import siteData from '../data/siteData.json';
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background-image.jpg'; // Replace with your image path

const FullWidthImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Ensures no overflow and thus no scrollbars */
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  h1{
    margin-bottom: 0.25em;
    font-size: clamp(3rem, 3vw, 6rem);
  }

  p{
    margin-top: 0.25em;
    padding: 0 10%;
    font-size: clamp(1rem, 1vw, 1.2rem);
  }
`;

const HeroComponent = () => {
  return (
    <FullWidthImageContainer>
      <BackgroundImage />
      <OverlayText>
        <h1>Willkommen im {siteData.name}</h1>
        <p>{siteData.about.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
      </OverlayText>
    </FullWidthImageContainer>
  );
};

export default HeroComponent;

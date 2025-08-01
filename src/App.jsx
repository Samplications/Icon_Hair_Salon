import siteData from './data/siteData.json';
import { useState } from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Hero from './components/Hero';
import ContentBlock from './components/ContentBlock';

import haarschnitt from './assets/haarschnitt.jpg';
import faerben from './assets/faerben.jpg';
import styling from './assets/styling.jpg';
import behandlung from './assets/behandlung.jpg';


// Create a map from filenames to imports
const images = {
  'haarschnitt.jpg': haarschnitt,
  'faerben.jpg': faerben,
  'styling.jpg': styling,
  'behandlung.jpg': behandlung,
};

function App() {

  return (
    <>
      <Hero/>
      {siteData.services.map((service, index) => (
        <ContentBlock 
          key={index}
          name={service.name}
          description={service.description}
          initialImageOnLeft={index % 2 === 0} // true for even indices: 0, 2, 4...
          image={images[service.image]}
        />
      ))}

    </>
  )
}

export default App

import React from 'react'
import styled from 'styled-components'
import bgDesktopLight from '../images/bg-desktop-light.jpg'
import bgDesktopDark from '../images/bg-desktop-dark.jpg'
import BgMobileLight from '../images/bg-mobile-light.jpg'
import BgMobileDark from '../images/bg-mobile-dark.jpg'

function Background({darkMode}) {
  return (
    <StyledBackground darkMode={darkMode}/>
  )
}

const StyledBackground = styled.div`
  background-image: url(${props => props.darkMode ? bgDesktopDark : bgDesktopLight});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  width: 100%;
  height: 300px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  @media (max-width: 375px) {
    background-image: url(${props => props.darkMode ? BgMobileDark : BgMobileLight});
    height: 250px;
  }
`;

export default Background
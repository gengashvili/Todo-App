import React from 'react'
import styled from 'styled-components'

function Footer({darkMode}) {
  return (
    <StyledFooter darkMode={darkMode}>Drag and drop to reorder list</StyledFooter>
  )
}

const StyledFooter = styled.footer`
    width: fit-content;
    margin:49px auto;
    color: ${props => props.darkMode ? '#5B5E7E' : '#9495A5' };
    @media(max-width: 375px) {
        margin-top: 90px;
  }

`

export default Footer
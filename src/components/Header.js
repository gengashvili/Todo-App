import React from 'react'
import styled from 'styled-components';
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'

function Header({darkMode,setDarkMode}) {
  return (
    <StyledHeader>
        <h2>Todo</h2>
        <img
            onClick={()=>setDarkMode(!darkMode)}
            src={darkMode ? sun: moon}
            alt="theme changer"
        />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-family: Josefin Sans;
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 15px;
        color: #FFFFFF;
        @media (max-width: 375px){
            font-size: 34px;
        }
    }
    img{
        height: 26px;
        width: 26px;
        border-radius: 0px;
        cursor: pointer;
        @media (max-width: 375px){
            height: 20px;
            width: 20px;
        }
    }
`
export default Header
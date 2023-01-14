import React from "react";
import styled from "styled-components";

function TodoStats({ darkMode,setSelectedFilter, leftItems,ClearCompleted}) {
  return (
    <Wrapper>
      <StatsContainer darkMode={darkMode}>
        <p>{leftItems} items left</p>
        <MiddleStats darkMode={darkMode}>
          <p tabindex="0" onClick={()=>setSelectedFilter('All')}>All</p>
          <p tabindex="0" onClick={()=>setSelectedFilter('InCompleted')}>Active</p>
          <p tabindex="0" onClick={()=>setSelectedFilter('Completed')}>Completed</p>
        </MiddleStats>
        <p onClick={ClearCompleted}>Clear Completed</p>
      </StatsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const StatsContainer = styled.div`
  background: ${(props) => (props.darkMode ? "#25273D" : "#ffffff")};
  color: ${(props) => (props.darkMode ? "#5B5E7E" : "#9495A5")};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 20px 24px;
  p {
    font-size: 14px;
    margin: 0 16px;
    :hover{
      color:${props => props.darkMode ? "#E3E4F1" : "#494C6B"};
    }
    cursor: pointer;
  }
`;

const MiddleStats = styled.div`
  display: flex;
  position: absolute;
  top: 30%;
  left: 30%;
  p{
    :focus{
      color:#3A7CFD;
    }
  }
  @media (max-width: 375px) {
    left: 0%;
    top: 120%;
    width: 327px;
    height: 48px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background: ${props => props.darkMode ? "#25273D" : "#ffffff"};
  }
`;

export default TodoStats;

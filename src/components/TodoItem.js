import React from "react";
import styled from "styled-components";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

function TodoItem({darkMode,todoText,removeTodo,index,completed,handleCompleted,}) {
  return (
    <StyledTodoItem darkMode={darkMode}>
      <Completeicon
        completed={completed}
        darkMode={darkMode}
        onClick={() => handleCompleted(index)}
      >
        {completed && <img src={check} alt="" />}
      </Completeicon>
      <Li completed={completed} darkMode={darkMode}>
        {todoText}
      </Li>
      <DeleteIcon src={cross} alt="" onClick={() => removeTodo(index)} />
    </StyledTodoItem>
  );
}
const StyledTodoItem = styled.div`
  width: 100%;
  height: 64px;
  background: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
  border-bottom: 1px solid
    ${(props) => (props.darkMode ? "#393A4B" : "#E3E4F1")};
  padding: 21px 72px;
  position: relative;
`;
const Li = styled.li`
  /* color: ${(props) => (props.darkMode ? "#C8CBE7" : "#494C6B")}; */
  font-family: Josefin Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.25px;
  text-decoration-line: ${(props) => (props.completed ? "line-through" : "")};
  opacity: ${(props) => (props.completed ? "0.5" : "1")};
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const DeleteIcon = styled.img`
  position: absolute;
  top: 28px;
  right: 31px;
  cursor: pointer;
`;
const Completeicon = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.darkMode ? "#393A4B" : "#E3E4F1")};
  position: absolute;
  top: 20px;
  left: 24px;
  background: ${(props) =>
    props.completed ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)" : ""};
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// export {Completeicon}

export default TodoItem;

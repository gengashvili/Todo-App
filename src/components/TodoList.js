import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList({ darkMode, handleCompleted, removeTodo,filteredTodos }) {
  return (
    <StyledTodosList darkMode={darkMode}>
      {filteredTodos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            index={index}
            darkMode={darkMode}
            todoText={todo.text}
            completed={todo.completed}
            removeTodo={removeTodo}
            handleCompleted={handleCompleted}
          />
        );
      })}
    </StyledTodosList>
  );
}

const StyledTodosList = styled.div`
  color: ${(props) => (props.darkMode ? "#C8CBE7" : "#494C6B")};
  background: ${(props) => (props.darkMode ? "#25273D" : "#ffffff")};
  border-radius: 5px;
  margin-top: 24px;
  overflow: hidden;
`;
export default TodoList;

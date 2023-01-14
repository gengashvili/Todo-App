import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./TodoList";
import styled from "styled-components";
import Header from "./Header";
import InputForm from "./InputForm";
import TodoStats from "./TodoStats";

function MainContainer({ darkMode, setDarkMode }) {

  const [todos, setTodos] = useState([
    { id: 1, text: "Complete online JavaScript course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: true },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: true },
    { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
  ]);

  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  function addTodo(text, completed) {
    if (text.length > 0) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: text,
          completed: completed,
        },
      ]);
    }
  }

  function handleCompleted(index) {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(index){
    setTodos(todos.filter((todo, i) => i !== index));
  }

  useEffect(() => {
    switch (selectedFilter) {
      case "All":
        setFilteredTodos(todos);
        break;
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "InCompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, selectedFilter]);

  const leftItems = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  function ClearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <StyledContainer>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <InputForm darkMode={darkMode} addTodo={addTodo} />
      <TodoList
        darkMode={darkMode}
        todos={todos}
        filteredTodos={filteredTodos}
        handleCompleted={handleCompleted}
        removeTodo={removeTodo}
      />
      <TodoStats 
        darkMode={darkMode} 
        todos={todos} 
        setSelectedFilter={setSelectedFilter}
        leftItems={leftItems}
        ClearCompleted={ClearCompleted}
      />

    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  width: 540px;
  margin: 70px auto 0;
  @media (max-width: 375px) {
    width: 327px;
    margin: 48px auto;
  }
`;

export default MainContainer;

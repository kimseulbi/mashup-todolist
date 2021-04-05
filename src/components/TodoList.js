import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function TodoList() {
  const state = useTodoState();
  console.log(state);
  return (
    <TodoListBlock>
      <TodoItem text="test" done={true}></TodoItem>
      <TodoItem text="test2" done={false}></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;

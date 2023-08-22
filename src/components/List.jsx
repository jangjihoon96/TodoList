import { useState } from "react";
import { styled } from "styled-components/macro";
import DeleteButton from "./DeleteButton";

export default function List() {
  const data = [
    { id: 1, content: "알고리즘 5문제 풀기", complete: false },
    { id: 2, content: "토이 프로젝트 1개 만들기", complete: false },
  ];
  const [todoData, setTodoData] = useState([...data]);

  const toggleComplete = (id) => {
    setTodoData((prevData) =>
      prevData.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <StyledList>
      {todoData.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={todo.complete ? "complete" : null}
          >
            {todo.id}. {todo.content}
          </span>
          <DeleteButton type="button">Del</DeleteButton>
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 24px 16px;
  font-size: 1rem;
  color: #191919;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    button {
      flex-shrink: 0;
    }
  }
  li + li {
    margin-top: 8px;
  }
  span {
    user-select: none;
    flex-grow: 1;
    padding: 8px 0;
    cursor: pointer;
    &.complete {
      text-decoration: line-through;
      color: #8454dc;
    }
  }
`;

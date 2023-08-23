import { styled } from "styled-components/macro";
import DeleteButton from "./DeleteButton";

export default function List({ todoData, setTodoData }) {
  const toggleComplete = (id) => {
    setTodoData((prevData) => {
      return prevData.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      );
    });
  };

  const deleteTodo = (id) => {
    setTodoData((prevData) => {
      return prevData.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <StyledList>
      {todoData.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => toggleComplete(todo.id)}
            className={todo.complete ? "complete" : null}
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toggleComplete(todo.id);
              }
            }}
          >
            {todo.id}. {todo.content}
          </span>
          <DeleteButton
            type="button"
            setTodoData={setTodoData}
            todo={todo}
            deleteTodo={deleteTodo}
          >
            Del
          </DeleteButton>
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

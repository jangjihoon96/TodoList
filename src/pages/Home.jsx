import { styled } from "styled-components/macro";
import Title from "../components/Title";
import Input from "../components/Input";
import List from "../components/List";
import { useState } from "react";

export default function Home() {
  const [todoData, setTodoData] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const todo = {
        id: todoData.length + 1,
        content: newTodo,
        complete: false,
      };
      setTodoData((prevData) => [...prevData, todo]);
      setNewTodo("");
    }
  };

  return (
    <StyledHomeContainer>
      <Title>Todo List 🔖</Title>
      <StyledHomeInner>
        <form action="" method="POST">
          <Input
            placeholder="Add Todo ..."
            type="text"
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
          <Testbutton onClick={handleAddTodo}>Add Button</Testbutton>
        </form>
        <List todoData={todoData} setTodoData={setTodoData} />
      </StyledHomeInner>
    </StyledHomeContainer>
  );
}

const StyledHomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #8454dc;
  h1 {
    position: absolute;
    top: 50%;
    left: 18%;
    transform: translate(-50%, -50%);
  }
`;
const StyledHomeInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 440px;
  padding: 20px 36px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

const Testbutton = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 8px;
  border-radius: 8px;
  border: 0;
  background-color: #ff7070;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ff8a8a;
  }
`;

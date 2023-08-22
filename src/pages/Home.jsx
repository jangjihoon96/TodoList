import { styled } from "styled-components/macro";
import Title from "../components/Title";
import Input from "../components/Input";
import List from "../components/List";

export default function Home() {
  return (
    <StyledHomeContainer>
      <Title>Todo List 🔖</Title>
      <StyledHomeInner>
        <form action="" method="POST">
          <Input placeholder="Add Todo ..." type="text" />
          <Testbutton>Add Button</Testbutton>
        </form>
        <List />
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
    top: 240px;
    left: 50%;
    transform: translateX(-50%);
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

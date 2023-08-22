import { styled } from "styled-components/macro";

export default function DeleteButton({ type, children }) {
  return <StyledDeleteButton type={type}>{children}</StyledDeleteButton>;
}

const StyledDeleteButton = styled.button`
  background-color: #333;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  color: #fff;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

import { styled } from "styled-components/macro";

export default function Input({ placeholder, type }) {
  return <StyledInput placeholder={placeholder} type={type} />;
}
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: none;
  font-size: 1rem;
  &::placeholder {
    color: #aaa;
  }
`;

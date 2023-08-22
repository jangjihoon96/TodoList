import { styled } from "styled-components/macro";

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
const StyledTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

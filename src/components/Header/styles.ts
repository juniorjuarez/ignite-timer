import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  a {
    width: 3rem;
    height: 3rem;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme["gray-100"]};

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["green-500"]};
    }
    &.active {
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;

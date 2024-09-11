import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  ul {
    display: flex;
    gap: 16px;

    a {
      transition: 0.3s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: 32px;
    font-weight: 200;
  }

  p {
    font-weight: 300;
    line-height: 32px;
  }
`;

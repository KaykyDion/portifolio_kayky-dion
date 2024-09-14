import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2,
  h3 {
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    background: linear-gradient(to right, #4beb9e, #ff9147);
    background-clip: text;
    color: transparent;
  }
`;

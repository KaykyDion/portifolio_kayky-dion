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

  button {
    border: none;
    font-weight: 900;
    color: ${({ theme }) => theme.background};
    background: linear-gradient(to right, #4beb9e, #ff9147);
    border-radius: 25px;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
    width: 200px;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1023px) {
      width: 90%;
    }
  }

  .section-title {
    font-size: 32px;
    font-weight: 200;
    text-align: center;
  }
`;

export const GradientButton = styled.button`
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
`;

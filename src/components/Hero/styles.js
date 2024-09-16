import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 1023px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      height: 200px;
      width: 200px;
      margin-bottom: 20px;
    }
  }
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

    @media (max-width: 1023px) {
      margin-bottom: 20px;
    }

    @media (max-width: 767px) {
      font-size: 32px;
    }
  }
`;

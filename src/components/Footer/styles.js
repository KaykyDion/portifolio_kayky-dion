import styled from "styled-components";

export const Container = styled.footer`
  padding: 32px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }

    > p {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 18px;
      max-width: 355px;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.text};
  }

  div {
    a {
      margin-right: 12px;
      transition: 0.3s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

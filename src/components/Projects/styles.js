import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 20px 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Project = styled.li`
  background-color: ${({ theme }) => theme.background};
  max-width: 294px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 366px;

  h3 {
    font-size: 16px;
    text-align: center;
  }

  .infos {
    padding: 16px;

    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 20px;
      a {
        width: 100px;
        background-color: ${({ theme }) => theme.backgroundSecondary};
        font-size: 14px;
        color: ${({ theme }) => theme.text};
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 20px;
        transition: 0.3s;
        &:hover {
          filter: brightness(1.3);
        }
      }
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.textSecondary};
      b {
        color: ${({ theme }) => theme.text};
      }
    }
  }
`;

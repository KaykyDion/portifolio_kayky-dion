import styled from "styled-components";

export const Container = styled.section`
  padding: 20px 0;
`;

export const TechsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Techs = styled.div`
  width: 294px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 16px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);

  h3 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 16px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    grid-gap: 16px;

    li {
      transition: 0.3s;

      img {
        height: 48px;
        width: 48px;
        object-fit: contain;
      }

      &:hover {
        filter: drop-shadow(10px 6px 4px rgba(0, 0, 0, 0.7));
      }
    }
  }
`;

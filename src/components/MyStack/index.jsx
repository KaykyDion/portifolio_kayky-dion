import db from "../../../db";
import { Container, TechName, Techs, TechsContainer } from "./styles";

export default function MyStack() {
  return (
    <Container className="container">
      <h2 className="section-title">Minha Stack</h2>
      <TechsContainer>
        <Techs>
          <h3>Front-End</h3>
          <ul>
            {db.technologies.frontEnd.map((tech) => (
              <li key={tech.name}>
                <img src={tech.image} alt={tech.name} />
                <TechName>{tech.name}</TechName>
              </li>
            ))}
          </ul>
        </Techs>
        <div>
          <Techs>
            <h3>Linguagens</h3>
            <ul>
              {db.technologies.languages.map((tech) => (
                <li key={tech.name}>
                  <img src={tech.image} alt={tech.name} />
                  <TechName>{tech.name}</TechName>
                </li>
              ))}
            </ul>
          </Techs>
          <Techs>
            <h3>Testes</h3>
            <ul>
              {db.technologies.tests.map((tech) => (
                <li key={tech.name}>
                  <img src={tech.image} alt={tech.name} />
                  <TechName>{tech.name}</TechName>
                </li>
              ))}
            </ul>
          </Techs>
        </div>
        <Techs>
          <h3>Back-End</h3>
          <ul>
            {db.technologies.backEnd.map((tech) => (
              <li key={tech.name}>
                <img src={tech.image} alt={tech.name} />
                <TechName>{tech.name}</TechName>
              </li>
            ))}
          </ul>
        </Techs>
      </TechsContainer>
    </Container>
  );
}

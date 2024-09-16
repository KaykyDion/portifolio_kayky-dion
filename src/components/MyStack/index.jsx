import db from "../../../db";
import { Container, Techs, TechsContainer } from "./styles";

export default function MyStack() {
  return (
    <Container className="container">
      <h2 className="section-title">Minha Stack</h2>
      <TechsContainer>
        <Techs>
          <h3>Desenvolvimento</h3>
          <ul>
            {db.technologies.development.map((tech) => (
              <li title={tech.name} key={tech.name}>
                <img src={tech.image} alt={tech.name} />
              </li>
            ))}
          </ul>
        </Techs>
        <Techs>
          <h3>Estilização</h3>
          <ul>
            {db.technologies.stylization.map((tech) => (
              <li title={tech.name} key={tech.name}>
                <img src={tech.image} alt={tech.name} />
              </li>
            ))}
          </ul>
        </Techs>
        <Techs>
          <h3>Testes</h3>
          <ul>
            {db.technologies.tests.map((tech) => (
              <li title={tech.name} key={tech.name}>
                <img src={tech.image} alt={tech.name} />
              </li>
            ))}
          </ul>
        </Techs>
      </TechsContainer>
    </Container>
  );
}

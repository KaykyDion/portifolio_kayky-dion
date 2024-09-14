import db from "../../../db";
import github from "../../assets/github-icon.svg";
import vercel from "../../assets/vercel-icon.svg";
import { Container, Project } from "./styles";

export default function Projects() {
  return (
    <Container>
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <ul>
          {db.projects.map((project) => (
            <Project key={project.name}>
              <h3>{project.name}</h3>
              <img src={project.image} alt={project.name} />
              <div className="infos">
                <p>
                  <b>Tema:</b> {project.theme}
                </p>
                <p>
                  <b>Tecnologias:</b> {project.technologies.join(", ")}
                </p>
                <div className="links">
                  <a target="_blank" href={project.github}>
                    <img src={github} alt="Ícone github" /> GitHub
                  </a>
                  <a target="_blank" href={project.deploy}>
                    <img src={vercel} alt="Ícone vercel" /> Projeto
                  </a>
                </div>
              </div>
            </Project>
          ))}
        </ul>
      </div>
    </Container>
  );
}

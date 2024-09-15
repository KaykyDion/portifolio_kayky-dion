import linkedin from "../../assets/linkedin-icon.svg";
import github from "../../assets/github-icon.svg";
import { Container, Infos } from "./styles";

export default function Footer() {
  return (
    <Container>
      <div className="container">
        <p>
          Estou aberto à propostas no momento. Entre em contato comigo e
          marcamos uma conversa 👋
        </p>
        <Infos>
          <a href="">kayky.dion@gmail.com</a>
          <p>(31) 9 9908-8984</p>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/kaykydion/">
              <img src={linkedin} alt="Link Linkedin" />
            </a>
            <a target="_blank" href="https://github.com/KaykyDion">
              <img src={github} alt="Link GitHub" />
            </a>
          </div>
        </Infos>
      </div>
    </Container>
  );
}

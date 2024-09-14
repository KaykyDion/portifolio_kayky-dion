import { Container } from "./styles";

import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import github from "../../assets/github-icon.svg";

const Header = () => (
  <>
    <Container className="container">
      <h1>
        <img src={logo} alt="Kayky Dion" />
      </h1>
      <ul>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/kaykydion/">
            <img src={linkedin} alt="Link Linkedin" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/KaykyDion">
            <img src={github} alt="Link GitHub" />
          </a>
        </li>
      </ul>
    </Container>
  </>
);

export default Header;

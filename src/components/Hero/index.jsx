import avatar from "../../assets/foto-perfil.png";
import { Container, InfoContainer } from "./styles";

const Hero = () => (
  <Container className="container">
    <img src={avatar} alt="foto Kayky Dion" />
    <InfoContainer>
      <h2>Kayky Dion</h2>
      <h3>
        Desenvolvedor <br /> Front-End React
      </h3>
      <button>Download CV</button>
    </InfoContainer>
  </Container>
);

export default Hero;

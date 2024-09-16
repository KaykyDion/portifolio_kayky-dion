import avatar from "../../assets/foto-perfil.png";
import curriculum from "../../assets/CV_kayky-dion.pdf";
import { GradientButton } from "../../styles";
import { Container, InfoContainer } from "./styles";

const Hero = () => (
  <Container className="container">
    <img src={avatar} alt="foto Kayky Dion" />
    <InfoContainer>
      <h2>Kayky Dion</h2>
      <h3>
        Desenvolvedor <br /> Front-End React
      </h3>
      <GradientButton href={curriculum} download>
        Download CV
      </GradientButton>
    </InfoContainer>
  </Container>
);

export default Hero;

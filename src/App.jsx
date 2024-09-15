import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles";
import { darkTheme } from "./themes/darkTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

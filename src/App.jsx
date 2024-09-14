import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { darkTheme } from "./themes/darkTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { darkTheme } from "./themes/darkTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;

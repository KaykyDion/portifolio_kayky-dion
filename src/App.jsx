import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles";
import { darkTheme } from "./themes/darkTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import MyStack from "./components/MyStack";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <AboutMe />
      <MyStack />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

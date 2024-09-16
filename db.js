import reactIcon from "./src/assets/technologies-icons/React.svg";
import htmlIcon from "./src/assets/technologies-icons/HTML.svg";
import jsIcon from "./src/assets/technologies-icons/JS.svg";
import tsIcon from "./src/assets/technologies-icons/TS.svg";
import reduxIcon from "./src/assets/technologies-icons/Redux.svg";
import gitIcon from "./src/assets/technologies-icons/Git.svg";
import jqueryIcon from "./src/assets/technologies-icons/jquery.svg";
import vueIcon from "./src/assets/technologies-icons/VueJS.svg";
import zustandIcon from "./src/assets/technologies-icons/Zustand.svg";
import reactRouterIcon from "./src/assets/technologies-icons/reactrouter.svg";

import cssIcon from "./src/assets/technologies-icons/CSS.svg";
import sassIcon from "./src/assets/technologies-icons/Sass.svg";
import bootstrapIcon from "./src/assets/technologies-icons/bootstrap.svg";
import styledComponentsIcon from "./src/assets/technologies-icons/styledcomponents.png";

import jestIcon from "./src/assets/technologies-icons/Jest.svg";
import cypressIcon from "./src/assets/technologies-icons/Cypress.svg";

import devflix from "./src/assets/projects-images/devflix.png";
import efood from "./src/assets/projects-images/efood.png";
import gestorDeEstoques from "./src/assets/projects-images/gestor-de-estoques.png";
import burguerBoss from "./src/assets/projects-images/burguer-boss.png";
import eplay from "./src/assets/projects-images/eplay.png";
import listaDeContatos from "./src/assets/projects-images/lista-de-contatos.png";

const db = {
  technologies: {
    development: [
      {
        name: "HTML",
        image: htmlIcon,
      },
      {
        name: "JavaScript",
        image: jsIcon,
      },
      {
        name: "TypeScript",
        image: tsIcon,
      },
      {
        name: "React",
        image: reactIcon,
      },
      {
        name: "Redux",
        image: reduxIcon,
      },
      {
        name: "GIT",
        image: gitIcon,
      },
      {
        name: "jquery",
        image: jqueryIcon,
      },
      {
        name: "VueJS",
        image: vueIcon,
      },
      {
        name: "Zustand",
        image: zustandIcon,
      },
      {
        name: "react-router-dom",
        image: reactRouterIcon,
      },
    ],
    stylization: [
      {
        name: "CSS",
        image: cssIcon,
      },
      {
        name: "Sass",
        image: sassIcon,
      },
      {
        name: "Bootstrap",
        image: bootstrapIcon,
      },
      {
        name: "styled-components",
        image: styledComponentsIcon,
      },
    ],
    tests: [
      {
        name: "Jest",
        image: jestIcon,
      },
      {
        name: "Cypress",
        image: cypressIcon,
      },
    ],
  },
  projects: [
    {
      name: "DevFlix",
      image: devflix,
      theme: "Catálogo de filmes",
      technologies: ["React", "Styled-components", "react-router-dom", "API"],
      deploy: "https://dev-flix-kappa.vercel.app/",
      github: "https://github.com/KaykyDion/DevFlix",
    },
    {
      name: "efood",
      image: efood,
      theme: "Plataforma de delivery",
      technologies: [
        "React",
        "Styled-components",
        "Redux",
        "react-router-dom",
        "Typescript",
        "API",
        "Formik",
        "Yup",
      ],
      deploy: "https://efood-alpha-seven.vercel.app/",
      github: "https://github.com/KaykyDion/efood",
    },
    {
      name: "Gestor de estoques",
      image: gestorDeEstoques,
      theme: "Gerenciador de estoques",
      technologies: ["React", "Styled-components", "react-router-dom"],
      deploy: "https://gestor-de-estoques-react.vercel.app/",
      github: "https://github.com/KaykyDion/gestor-de-estoques-react",
    },
    {
      name: "Burguer Boss",
      image: burguerBoss,
      theme: "Cardápio Online",
      technologies: ["React", "CSS", "Zustand"],
      deploy: "https://burger-boss-six.vercel.app/",
      github: "https://github.com/KaykyDion/Burger-Boss",
    },
    {
      name: "eplay",
      image: eplay,
      theme: "e-commerce de games",
      technologies: [
        "React",
        "Styled-components",
        "Redux",
        "react-router-dom",
        "Typescript",
        "API",
        "Formik",
        "Yup",
      ],
      deploy: "https://eplay-one.vercel.app/",
      github: "https://github.com/KaykyDion/eplay",
    },
    {
      name: "Lista de contatos",
      image: listaDeContatos,
      theme: "Agenda de contatos",
      technologies: [
        "React",
        "Styled-components",
        "Redux",
        "react-router-dom",
        "Typescript",
      ],
      deploy: "https://lista-de-contatos-react-nu.vercel.app/",
      github: "https://github.com/KaykyDion/lista-de-contatos-react",
    },
  ],
};

export default db;

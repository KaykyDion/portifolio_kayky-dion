import reactIcon from "./src/assets/technologies-icons/React.svg";
import htmlIcon from "./src/assets/technologies-icons/HTML.svg";
import reduxIcon from "./src/assets/technologies-icons/Redux.svg";
import jqueryIcon from "./src/assets/technologies-icons/jquery.svg";
import vueIcon from "./src/assets/technologies-icons/VueJS.svg";
import zustandIcon from "./src/assets/technologies-icons/Zustand.svg";
import cssIcon from "./src/assets/technologies-icons/CSS.svg";
import sassIcon from "./src/assets/technologies-icons/Sass.svg";
import bootstrapIcon from "./src/assets/technologies-icons/bootstrap.svg";
import styledComponentsIcon from "./src/assets/technologies-icons/styledcomponents.png";
import nextJsIcon from "./src/assets/technologies-icons/next-js.svg";
import tailwindIcon from "./src/assets/technologies-icons/tailwindcss.svg";

import jsIcon from "./src/assets/technologies-icons/JS.svg";
import tsIcon from "./src/assets/technologies-icons/TS.svg";
import pyIcon from "./src/assets/technologies-icons/python.svg";

import jestIcon from "./src/assets/technologies-icons/Jest.svg";
import cypressIcon from "./src/assets/technologies-icons/Cypress.svg";

import nodeIcon from "./src/assets/technologies-icons/nodejs.svg";
import expressIcon from "./src/assets/technologies-icons/expressjs.svg";
import postgreIcon from "./src/assets/technologies-icons/postgresql.svg";
import jwtIcon from "./src/assets/technologies-icons/jwt.svg";
import prismaIcon from "./src/assets/technologies-icons/prisma.svg";

import devflix from "./src/assets/projects-images/devflix.png";
import efood from "./src/assets/projects-images/efood.png";
import gestorDeEstoques from "./src/assets/projects-images/gestor-de-estoques.png";
import burguerBoss from "./src/assets/projects-images/burguer-boss.png";
import eplay from "./src/assets/projects-images/eplay.png";
import cloudy from "./src/assets/projects-images/cloudy.png";
import listaDeContatos from "./src/assets/projects-images/lista-de-contatos.png";

const db = {
  technologies: {
    frontEnd: [
      {
        name: "HTML",
        image: htmlIcon,
      },
      {
        name: "CSS",
        image: cssIcon,
      },
      {
        name: "React",
        image: reactIcon,
      },
      {
        name: "Next.js",
        image: nextJsIcon,
      },
      {
        name: "TailwindCSS",
        image: tailwindIcon,
      },
      {
        name: "Redux",
        image: reduxIcon,
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
        name: "styled-components",
        image: styledComponentsIcon,
      },
      {
        name: "Sass",
        image: sassIcon,
      },
      {
        name: "Bootstrap",
        image: bootstrapIcon,
      },
    ],
    languages: [
      {
        name: "JavaScript",
        image: jsIcon,
      },
      {
        name: "TypeScript",
        image: tsIcon,
      },
      {
        name: "Python",
        image: pyIcon,
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
    backEnd: [
      {
        name: "Node.js",
        image: nodeIcon,
      },
      {
        name: "Express.js",
        image: expressIcon,
      },
      {
        name: "PostgreSQL",
        image: postgreIcon,
      },
      {
        name: "JWT",
        image: jwtIcon,
      },
      {
        name: "Prisma",
        image: prismaIcon,
      },
    ],
  },
  projects: [
    {
      name: "Cloudy",
      image: cloudy,
      theme: "Rede social",
      technologies: [
        "Node.js",
        "Typescript",
        "Express.js",
        "PrismaORM",
        "PostgreSQL",
        "Bcrypt",
        "JWT",
        "React",
        "RadixUI",
        "Zuastand",
      ],
      deploy: "https://cloudy-front-end.vercel.app/",
      github: "https://github.com/KaykyDion/Cloudy-api",
    },
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
  ],
};

export default db;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      sidebar: {
        projects: "Proyectos",
        about: "Sobre mí",
        interest: "Habilidades",
        education: "Experiencia"
      },
      education: {
        title: "EXPERIENCIA",
        silenceRole: "Programador Web - Silence",
        silenceDesc1: "Desarrollo Front-End en aplicaciones web en React con base de datos en .Net y Java",
        silenceDesc2: "Desarrollo Front-End en aplicaciones web en Vue con base de datos en .Net",
        yucodeRole: "Programador Web - Yucode",
        yucodeDesc: "Desarrollo front end con React y Angular en proyecto interno. <br/> Página web con WordPress.",
        bluumiRole: "Programador Full-Stack - Bluumi",
        bluumiDesc1: "Desarrollo Front End de aplicaciones en C# y React para la empresa de Acciona.",
        bluumiDesc2: "Desarrollo back end de Api Web Net Core 6 y desarrollo front end con React. Bases de datos SQL Server.",
        fakoyRole: "Programador Web - Fakoy",
        fakoyDesc: "Desarrollo front end con React y Angular en proyecto interno. <br/> Página web con WordPress.",
        inetDescription: "Proyectos React y Angular con Back End NET. Bases de datos SQL Server y MongoDB.",
        ironhackRole: "Desarrollador Web - Ironhack",
        implikaRole: "Preparador físico y nutrición - Implika",
        deustoRole: "Diseño y desarrollo de videojuegos - DEUSTO",
        culturalRole: "Grado Superior en Informática - Cultural Badalona"
      },
      projects: {
        title: "Proyectos",
        head: "MI TRABAJO"
      },
      about: {
        title: "SOBRE MI",
        head: "Quien soy?",
        description: "¡Hola! Soy <b>Christian Hernández</b> y soy un apasionado del desarrollo web. Tengo grandes habilidades con <b>React, Vue y en general con el ecosistema JavaScript.</b> <br/> Para mi es un reto el trabajo diario para continuar formándome y aprendiendo y así mejorar mis conocimientos y mi experiencia laboral. Actualmente me considero un programador <b>Full-Stack</b>."
      },
      interest: {
        title: "HABILIDADES",
        head: "AQUI ALGUNAS DE MIS HABILIDADES",
      }
    }
  },
  en: {
    translation: {
      sidebar: {
        projects: "Projects",
        about: "About me",
        interest: "Skills",
        education: "Experience"
      },
      education: {
        title: "EXPERIENCE",
        silenceRole: "Web Developer - Silence",
        silenceDesc1: "Front-End development in React web applications with .Net and Java backend",
        silenceDesc2: "Front-End development in Vue web applications with .Net backend",
        yucodeRole: "Web Developer - Yucode",
        yucodeDesc: "Front-end development with React and Angular in internal project. <br/> Web page with WordPress.",
        bluumiRole: "Full-Stack Developer - Bluumi",
        bluumiDesc1: "Front End development of applications in C# and React for the company Acciona.",
        bluumiDesc2: "Back end development of Api Web Net Core 6 and front end development with React. SQL Server databases.",
        fakoyRole: "Web Developer - Fakoy",
        fakoyDesc: "Front-end development with React and Angular in internal project. <br/> Web page with WordPress.",
        inetDescription: "React and Angular projects with .Net Back End. SQL Server and MongoDB databases.",
        ironhackRole: "Web Developer - Ironhack",
        implikaRole: "Fitness Trainer and Nutritionist - Implika",
        deustoRole: "Design and development of video games - DEUSTO",
        culturalRole: "Advanced Degree in Computer Science - Cultural Badalona"
      },
      projects: {
        title: "Projects",
        head: "MY JOB"
      },
      about: {
        title: "ABOUT ME",
        head: "Who am I?",
        description: "Hello! I'm <b>Christian Hernández</b> and I'm passionate about web development. I have great skills with <b>React, Vue, and the JavaScript ecosystem in general.</b> <br/> For me, daily work is a challenge to continue training and learning to improve my knowledge and work experience. I currently consider myself a <b>Full-Stack</b> developer."
      },
      interest: {
        title: "SKILLS",
        head: "HERE ARE SOME OF MY SKILLS",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
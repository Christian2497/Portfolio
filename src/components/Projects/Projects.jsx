import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import shopping from '../images/shopping-app.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import profilee from '../images/profilee.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';
import frontenddev from '../images/frontenddev.png';
import solanaaid from '../images/solanaaid.png';
import jumpstart from '../images/jumpstart.png';

import { useTranslation } from 'react-i18next';

// Web projects
const webItem = [
  { 
    //link: 'https://www.frontenddev.site/',
    title: 'Silence - BAAS',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: React Js, Mantine UI, Context API',
    //image: frontenddev,
    color: '#E5E483'
  },
  {
    //link: 'https://www.profilee.site/',
    title: 'Acciona - Mobility',
    techStack: 'Tech Stack: Next JS, Tailwind, Typescript, Prisma, AWS S3',
    desc: 'Profilee is an open source profile link bio page builder',
    //image: profilee,
    color: '#0FFFFF'
  },
  {
    //link: 'https://www.saasjumpstart.live/',
    title: 'Silence - MySilence',
    techStack:
      'Technology used: Typescript, Nextjs, Prisma, Tailwind CSS, AWS S3, React Drag and Drop, Zod',
    desc: 'Next.js boilerplate setup for the repetitive work. It comes with authentication with email verification, stripe payment integration, customizable components, email preview, and much more.',
    //image: jumpstart,
    color: '#D2E0FB'
  },
  {
    //link: 'https://chess-web-online.netlify.app/',
    title: 'Yucode - JNegre',
    techStack: 'Tech Stack- ReactJs, NodeJS, Express, Socket.io.',
    desc: 'Play real time chess with your friends online by sharing a link.',
    //image: chess,
    color: '#d5ebda',
  }
];

export default function Projects() {
  const { t } = useTranslation();

  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>{t('projects.head')}</span>
      <h2 className={classes.heading}>{t('projects.title')}</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
    </div>
  );
}

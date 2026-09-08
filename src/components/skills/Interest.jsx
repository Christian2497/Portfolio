import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { useTranslation } from 'react-i18next';

export default function Interest() {
  const { t } = useTranslation();

  return (
    <div className={classes.box} id='interest'>
      <span className={classes.head}>{t('interest.title')}</span>
      <h2 className={classes.heading}>{t('interest.head')}</h2>
      <div className={classes.Interest}>
        {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        {/* <div className={classes.web}>
          <h3>APP Develpoment</h3>
          <p>
            I have knowledge of flutter development and have experience in building android and IOS
            applications. I also have live projects published on Google Play Store.
          </p>
        </div> */}
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.web}>
          <h3>Web Development</h3>
          <p>
            Javascript/ Typescript, HTML/ CSS, ReactJs, VueJs, Next.js, .Net, Redux, Tailwind
            CSS, UI Libraries (React-Bootstrap, MUI, Shadcn UI), Unit Testing.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            AWS, Docker, GitHub, Frontend System Design, Express.js, Node.js, MongoDB,
            SQL, Socket.io, jQuery
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}

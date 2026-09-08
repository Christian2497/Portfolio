import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import { withTranslation, Trans } from 'react-i18next';

class About extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className={classes.box} id='about'>
        <span className={classes.head}>{t('about.title')}</span>
        <h2 className={classes.heading}>{t('about.head')}</h2>
        <div className={classes.About}>
          <p>
             <Trans i18nKey="about.description" components={{ b: <b /> }} />
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default withTranslation()(About);

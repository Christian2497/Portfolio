import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { withTranslation } from 'react-i18next';

class Education extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>{t('education.title')}</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <div className={classes.paraWithSubheading}>
                        <div className={classes.subHeading}> {t('education.silenceRole')} <i> (11/2025 - 07/2026) </i> </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            {t('education.silenceDesc1')}
                          </div>
                          <div className={classes.description}>
                            {t('education.silenceDesc2')}
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}> {t('education.yucodeRole')}  (11/2021 - 11/2025) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            {t('education.yucodeDesc')}
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}> {t('education.bluumiRole')}  (09/2022 - 08/2025) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            {t('education.bluumiDesc1')}
                          </div>
                          <div className={classes.description}>
                            {t('education.bluumiDesc2')}
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}> {t('education.fakoyRole')}  (07/2021 - 10/2021) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            {t('education.fakoyDesc')}
                          </div>
                        </div>
                      </div>
                      <div className={classes.paraWithSubheading}>
                      <div className={classes.subHeading}> INET (09/2018 - 07/2018) </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            {t('education.inetDescription')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        {t('education.ironhackRole')} <span>09/2020 - 12/2020</span>
                      </h2>
                    </div>
                    <div className={classes.label}>
                      <h2>
                        {t('education.implikaRole')} <span>09/2019 - 09/2020</span>
                      </h2>
                    </div>
                    <div className={classes.label}>
                      <h2>
                        {t('education.culturalRole')} <span>09/2018 - 08/2019</span>
                      </h2>
                    </div>
                    <div className={classes.label}>
                      <h2>
                        {t('education.deustoRole')} <span>09/2015 - 06/2017</span>
                      </h2>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withTranslation()(Education);

import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import logo from '../images/perfil.jpg';
import github from '../images/github.png';
import twitter from '../images/twitterx.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';

export default function Sidebar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };
  const iconList = [
    {
      component: github,
      href: 'https://github.com/Christian2497'
    },
    {
      component: linkedin,
      href: 'https://www.linkedin.com/in/christian-hernandez-heras'
    },
    {
      component: twitter,
      href: 'https://x.com/TheKnebep9'
    },
    {
      component: gmail,
      href: 'mailto:christian_8_neus@hotmail.com'
    }
  ];
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='sidebar'>
      {/* SECCIÓN CAMBIO DE IDIOMA */}
      <div className="lang-switcher" style={{ marginBottom: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={() => changeLanguage('es')} 
          style={{ fontWeight: i18n.language === 'es' ? 'bold' : 'normal', cursor: 'pointer', background: 'none', border: 'none' }}
        >
          Español
        </button>
        |
        <button 
          onClick={() => changeLanguage('en')} 
          style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal', cursor: 'pointer', background: 'none', border: 'none' }}
        >
          English
        </button>
      </div>
      <h1>
        <Link smooth to='/#start' className='h1_links'>
          Christian Hernández Heras
        </Link>
      </h1>
      <motion.div
        animate={{ y: [2, -2] }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={logo} className='my-img' />
      </motion.div>
      <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
        <a
          href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
          rel='opener noreferrer'
          target='_blank'
          className='fa fa-envelope'
        ></a>
        &nbsp;christian_8_neus@hotmail.com
      </p>

      <ul className='sidebar-nav'>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#projects' className='links'>
            {t('sidebar.projects')}
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#about' className='links'>
            {t('sidebar.about')}
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#interest' className='links'>
            {t('sidebar.interest')}
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#education' className='links'>
            {t('sidebar.education')}
          </Link>
        </li>
      </ul>

      <div>
        <motion.ul className='sidebar-nav' variants={container} initial='hidden' animate='visible'>
          {iconList.map((val, index) => (
            <motion.li key={index} variants={item}>
              <img
                onClick={() => {
                  window.open(val.href, '_blank');
                }}
                src={val.component}
                className='icon-img'
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

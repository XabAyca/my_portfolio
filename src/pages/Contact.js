import ButtonsBottom from 'components/ButtonsBottom';
import ContactForm from 'components/ContactForm';
import Logo from 'components/Logo';
import Mouse from 'components/Mouse';
import Navigation from 'components/Navigation';
import SocialNetwork from 'components/SocialNetwork';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { motion } from 'framer-motion';

const Contact = () => {

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x:200,
    },
    visible: {
      opacity: 1, 
      x:0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x:-800,
    },
  }

  return (
    <main>

      <motion.div
        className="contact"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Mouse />
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>Résidence du Golf</p>
              <p>rue du Baron de Longueil</p>
              <p>64 140 Lons</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0679694587" className="hover">
                <p style={{ cursor: 'pointer' }} className='clipboard' onClick={() => {
                  alert('Numéro de téléphoné copié !')
                }}>06 79 69 45 87</p>
              </CopyToClipboard>
            </div>
          </div>
          <div className='email'>
            <div className='content'>
              <h4>Email</h4>
              <CopyToClipboard text="xabi.aycaguer@gmail.com" className='hover'>
                <p style={{ cursor: 'pointer' }} className='clipboard' onClick={() => {
                  alert('Email copié !')
                }}>xabi.aycaguer@gmail.com</p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Create with by &#9829; Xabi AYCAGUER - © 2021</p>
          </div>
        </div>
        <ButtonsBottom left={'/project-4'} />
      </motion.div>
    </main>
  );
};

export default Contact;
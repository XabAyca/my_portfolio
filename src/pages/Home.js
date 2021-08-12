import ButtonsBottom from 'components/ButtonsBottom';
import DynamicText from 'components/DynamicText';
import Mouse from 'components/Mouse';
import Navigation from 'components/Navigation';
import SocialNetwork from 'components/SocialNetwork';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import DarkBtn from 'components/DarkBtn';
import DarkMode from 'components/DarkMode';

const Home = () => {
  const {darkMode} = useContext(DarkMode)

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x:100,
    },
    visible: {
      opacity: 1,
      x:0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x:-100,
    },
  }

  return (
    <main>
      <Mouse/>
      <motion.div
        className={darkMode?"home dark":"home"}
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <DarkBtn/>
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1 drag onDragEnd>Xabi AYCAGUER</motion.h1>
            <motion.h2 drag onDragEnd><DynamicText /></motion.h2>
          </div>
        </div>
        <ButtonsBottom right={"/project-1"}/>
      </motion.div>
    </main>
  );
};

export default Home;
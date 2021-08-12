import React, { useContext } from 'react';
import DarkMode from './DarkMode';
import { motion } from 'framer-motion';

const DarkBtn = () => {
  const { darkMode, toggleMode } = useContext(DarkMode)
  console.log(darkMode)
  
  return (
      <motion.span drag onDragEnd className={darkMode?'dark-btn hover dark':'dark-btn hover'} onClick={toggleMode}>Mode&nbsp;{darkMode?<i className="far fa-sun"></i> : <i className="far fa-moon"></i> }</motion.span>
  );
};

export default DarkBtn;
import React, { useContext } from 'react';
import DarkMode from './DarkMode';

const Logo = () => {
  const {darkMode} = useContext(DarkMode)
  return (
    <div>
      <span className={darkMode?'logo dark':'logo'}>Xabi</span>
    </div>
  );
};

export default Logo;
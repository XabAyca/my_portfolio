import React, { useContext } from 'react';
import DarkMode from './DarkMode';

const SocialNetwork = () => {
  const {darkMode}= useContext(DarkMode)

  const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a')

    navLinks.forEach((link) =>{
      link.addEventListener('mouseover', (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate(${attrX}px, ${attrY}px)`;
      })
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      })
    })
  }

  return (
    <div className={darkMode?"social-network dark":"social-network"}>
      <ul className="content">
        <a onMouseOver={anim} href='https://www.facebook.com/profile.php?id=100004295178969' target='_blank' rel='noopener noreferrer' className='hover'>
          <li><i className='fab fa-facebook-f'></i></li>
        </a>
        <a onMouseOver={anim} href='https://github.com/XabAyca' target='_blank' rel='noopener noreferrer' className='hover'>
          <li><i className='fab fa-github'></i></li>
        </a>
        <a onMouseOver={anim} href='https://www.linkedin.com/in/xabi-aycaguer/' target='_blank' rel='noopener noreferrer' className='hover'>
          <li><i className='fab fa-linkedin'></i></li>
        </a>
      </ul>
    </div>
  );
}; 

export default SocialNetwork;
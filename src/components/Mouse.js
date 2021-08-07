import React, { useEffect } from 'react';

const Mouse = () => {

  useEffect(() => {

    const cursor = document.querySelector('.cursor')
    const handleCursor = (e) => {
      let x = e.clientX * 100 / window.innerWidth + "%";
      let y = e.clientY * 100 / window.innerHeight + "%";

      cursor.style.top = y;
      cursor.style.left = x;
    }

    window.addEventListener('mousemove', handleCursor);

    const handleHover = () => {
      cursor.classList.add('hovered')
    }
    const handleLeave = () => {
      cursor.classList.remove('hovered')
    }
    
    document.querySelectorAll('.hover').forEach((link) => {
      link.addEventListener('mouseover', handleHover)
      link.addEventListener('mouseleave', handleLeave)
    })
  },[])


  return (
    <span className='cursor'></span>
  );
};

export default Mouse;
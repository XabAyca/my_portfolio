import React, { useEffect } from 'react';

const Mouse = () => {

  useEffect(() => {

    const handleCursor = (e) => {
      let x = e.clientX  + "px";
      let y = e.clientY  + "px";

      document.querySelector('.cursor').style.top = y;
      document.querySelector('.cursor').style.left = x;
    }

    window.addEventListener('mousemove', handleCursor);

    const handleHover = () => {
      document.querySelector('.cursor').classList.add('hovered')
    }
    const handleLeave = () => {
      document.querySelector('.cursor').classList.remove('hovered')
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
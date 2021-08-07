import React from 'react';

const DynamicText = () => {

  React.useEffect(() => {
    const target = document.getElementById('text-target')
    let array = ['Front-end', 'Back-end', 'Full-stack</>']
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement('span')
      target.appendChild(letter);
      letter.classList.add('letter');
      letter.style.opacity = '0';
      letter.style.animation = 'anim 5s ease forwards';
      letter.textContent = array[wordIndex][letterIndex]

      setTimeout(() => {
        letter.remove()
      },5000)
    }

    const loop = () => { 
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop()
        }else if(letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop()
          },5000)
        }
      },150)
    }
    loop()
 
  }, [])



  return (
    <span className='dynamic-text'>
      <span className='simply'>Développeur</span>
      <span id='text-target'></span>
    </span>
  );
};

export default DynamicText;
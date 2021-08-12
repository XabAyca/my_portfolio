import { projectsData } from 'data/projectsData';
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import DarkMode from './DarkMode';

const Project = ( props ) => {
  const [currentProject] = useState(projectsData)
  const project = currentProject[props.projectNumber]
  const {darkMode}=useContext(DarkMode)

  let left = Math.floor(Math.random()* 200 + 700) + "px"
  let top = Math.floor(Math.random() * 200 + 150) + "px"
  let size = "scale(" + (Math.random() + 0.7) + ")"
  
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

  let plusMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * plusMinus;
  let imgY = Math.random() * 120 * plusMinus;


  const imgAnim ={
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY
    },
    visible: {
      opacity: 1,
      x: 0,
      y:0
    }
  }

  return (
    <motion.div
      className={darkMode?"project-main dark":"project-main"}
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <div className="project-content">
        <h1>{project.title} </h1>
        <p>{project.date}</p>
        <ul className='languages'>
          {project.languages.map((language) => {
            return <li key={language}>{language}</li>
          })}
        </ul>
      </div>
      <motion.div
        className='img-content'
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{duration:1.2}}
      >
        <div className='img-container hover'>
          <span>
            <h3>{project.title}</h3>
            <p>{project.infos}</p>
          </span>
          <img src={project.img} alt={project.title}></img>
        </div>
        <div className='button-container'>
          <a href={project.link} target="_blank" rel='noopener noreferrer' className='hover'>
            <span className='button'>Voir le site</span> 
          </a>
          <a  href={project.github} target='_blank' rel='noopener noreferrer' className='hover'>
            <i className='fab fa-github git'></i>
          </a>
        </div>
      </motion.div>
      <span className='random-circle' style={{left, top, transform: size}}></span>
    </motion.div>
  );
};

export default Project;
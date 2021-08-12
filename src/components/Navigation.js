import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { projectsData } from 'data/projectsData';
import DarkMode from './DarkMode';

const Navigation = () => {
  const [currentProject] = React.useState(projectsData);
  const {darkMode} =useContext(DarkMode)

  return (
    <div className={darkMode?'navigation dark':'navigation'}>
      <ul>
        <NavLink to="/" exact className='hover' activeClassName='nav-active'>
          <li>Accueil</li>
        </NavLink>
        <li className="nav-portfolio">Portfolio
          <ul className="nav-projects">
            {currentProject.map((project) => {
             return (<NavLink to={"/project-" + (project.id) } key={project.id}activeClassName="nav-active" className="hover">
              <li>{project.title}</li>
              </NavLink>)
            })}
          </ul>
        </li>
        <NavLink to="/contact" exact className='hover' activeClassName='nav-active'>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
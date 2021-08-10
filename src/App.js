import Contact from 'pages/Contact';
import Home from 'pages/Home';
import {Project1,Project2,Project3,Project4} from 'pages/Projects';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import DarkMode from 'components/DarkMode';

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const [darkMode,setDarkMode]= useState(null)


  React.useEffect(() => {

    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/"

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after)
          },500)
        } else if (e.wheelDeltaY > 0){
          setTimeout(() => {
            history.push(before)
          },500)
        }
      }

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0 ){
          setTimeout(() => {
            history.push('project-1')
          },500)
          } 
          break;
        case url + "project-1":
          wheelRouter("project-2", "");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("contact", "project-3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push('project-4')
          },500)
          }
          break;
        default:
          console.log("nothing");
      }
    }

    window.addEventListener('wheel', handleScrollToElement)

  }, [history])

  useEffect(() => {
    const dark = JSON.parse(localStorage.getItem('ThemeContext:darkMode'));
    if (dark !== undefined && dark !== null) {
      setDarkMode(dark);
    }else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      setDarkMode(false);
    }
  }, []);

  return (
    <DarkMode.Provider value={{
      darkMode,
      toggleMode: () => {
        localStorage.setItem('ThemeContext:darkMode', String(!darkMode));
        setDarkMode(!darkMode);
      }
    }}>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/project-1" component={Project1}/>
          <Route exact path="/project-2" component={Project2}/>
          <Route exact path="/project-3" component={Project3}/>
          <Route exact path="/project-4" component={Project4}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect to="/" />
        </Switch>
        </AnimatePresence>
    </DarkMode.Provider>
  );
};

export default App;

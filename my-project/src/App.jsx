import React,{ useState } from 'react'
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
function App() {


  return (
    <>
      <Sidenav />
      <Main />
      <Work /> 
      <Projects />
      <Tech />
      <Contact />
    </>
   
  );
}

export default App

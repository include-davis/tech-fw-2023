import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import Projects from '@/components/personal/project';
// import FaveThings from '@/components/week3/map';
// import State from '@/components/week3/state';
// import Props from '@/components/week3/props';
import NavBar from '@/components/personal/navbar';
import React from 'react';

const navLinks = [
  {name: "Home", href:"/home"},
  {name: "Services", href:"/services"},
  {name: "About", href:"/about"},
  {name: "Contact", href:"/contact"}
];

export default function Personal() {
  return (
    <div>
      {/* <Props name="Anna"/> */}
      <NavBar links={navLinks}/>
      <About />
      <Skills />
      <Projects />
      {/* <FaveThings />
      <State /> */}
      <Footer />
    </div>
  );
}

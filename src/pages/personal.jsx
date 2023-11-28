import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import Props from '@/components/week3/props';
import React from 'react';
import Navbar from '@/components/personal/navbar';

const navLinks = [
  {name:"Home", href: "/home"}, 
  {name:"About", href: "/about"}, 
  {name:"Contact", href: "contact"}, 
  {name:"Services", href: "/services"}]
/*order matters. first one appears first in display */

export default function Personal() {
  return (
    <div>
      <Navbar links={navLinks}/>
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Navbar from '@/components/personal/navbar';
import Footer from '@/components/personal/footer';
import React from 'react';

// ordered; write in order as you want them to appear
const navLinks = [
  {name: "Home", href: "/home"}, 
  {name: "About", href: "/about"}, 
  {name: "Contact", href: "/contact"}, 
  {name: "Services", href: "/services"}
]

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

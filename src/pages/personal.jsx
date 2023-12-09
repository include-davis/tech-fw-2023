import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Navbar from '@/components/personal/navbar';
import Footer from '@/components/personal/footer';
import React from 'react';

const navLinks = [
  {name: "Home", href: "/home"},
  {name: "Services", href: "/services"},
  {name: "About", href: "/about"},
  {name: "Contact", href: "/contact"}
]

export default function Personal() {
  return (
    <div>
      <Navbar links={navLinks}/>
      <About />
      <Skills  />
      <Footer />
    </div>
  );
}

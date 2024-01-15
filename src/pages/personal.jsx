import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import React from 'react';
import NavBar_Personal from '@/components/personal/navbar';
import personal from "../styles/components/personal/personal.module.scss";

export default function Personal() {
  return (
    <div className={personal.page}>
      <NavBar_Personal />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

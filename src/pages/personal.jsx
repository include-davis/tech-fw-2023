import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import React from 'react';
import NavBar_Personal from '@/components/personal/navbar';

export default function Personal() {
  return (
    <div>
      <NavBar_Personal />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

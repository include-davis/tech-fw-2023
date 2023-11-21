import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import Projects from '@/components/personal/project';
import FaveThings from '@/components/week3/map';
import State from '@/components/week3/state';
import React from 'react';

export default function Personal() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <FaveThings />
      <State />
      <Footer />
    </div>
  );
}

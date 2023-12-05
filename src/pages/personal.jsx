import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import Project from '@/components/personal/project';
import Dropdown from '@/components/personal/dropdown';
import React from 'react';

export default function Personal() {
  return (
    <div>
      <Dropdown />
      <About />
      <Skills />
      <Project />
      <Footer />
     
    </div>
  );
}
 
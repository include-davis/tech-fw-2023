import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import React from 'react';
import Navbar from '@/components/navbar/navbar';

export default function Personal() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Footer />
      
    </div>
  );
}
